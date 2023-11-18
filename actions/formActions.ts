"use server"
import { prisma } from "@/prisma/client"
import { FormElement } from "@/utils/globalTypes"
import { currentUser } from "@clerk/nextjs"




export async function publishFormAction(formName: string, formDesc: string, formSchema: string) {
    try {
        const userData = await currentUser()

        const userMail = userData?.emailAddresses[0].emailAddress
        const userForms = await prisma.form.findMany({ where: { ownerEmail: userMail } })
        //sets the forms to 4 per user (going to change it when adding the pay feature ) 
        if (userForms.length >= 4) {
            return { success: false, message: "forms limit excited" }
        }

        if (userMail && userMail.length > 0) {

            const newForm = await prisma.form.create({
                data: {
                    name: formName,
                    description: formDesc,
                    schema: formSchema,
                    subCount: 0,
                    views: 0,
                    ownerEmail: userMail
                }
            })
            return { success: true, formId: newForm.id }
        }

    } catch (error: any) {

        return { success: false, message: error?.message ?? "" }
    }
}

export async function getPublishedForms() {
    try {
        const userData = await currentUser()
        const userMail = userData?.emailAddresses[0].emailAddress
        const forms = await prisma.form.findMany({ where: { ownerEmail: userMail } })
        return { success: true, data: forms }
    } catch (error: any) {
        return { success: false, message: error.message }
    }
}
export async function getFormById(id: string) {
    try {
        const forms = await prisma.form.findFirst({ where: { id: id } })
        return { success: true, data: forms }



    } catch (error: any) {
        return { success: false, message: error.message }
    }

}



export async function submitFormAction(data: FormData) {
    const result: any = {}
    const formId = data.get("formId")?.toString()

    data.forEach((value, key) => {
        if (!key.startsWith("$ACTION_ID") && !key.startsWith("formId")) {
            result[key] = value
        }
    }
    )
    //limits the form submissions to 30
    //note that this limit will be changed when the paying feature get added
    if (!(await canSubmit(formId ?? "", 30))) {
        return { success: true }
    }

    try {

        //updates the sub count
        const form = await prisma.form.findFirst({ where: { id: formId } })
        if (form?.subCount != undefined) {
            await prisma.form.update({ where: { id: formId }, data: { subCount: form.subCount + 1 } })

        }
        //submit the form data
        const submessionRes = await prisma.submession.create({
            data: {
                formId: formId ?? "",
                subSchema: JSON.stringify(result)
            }
        })
        if (submessionRes) {
            return { success: true }
        }
        return { success: false }

    } catch (error) {
        return { success: false }
    }
}

export async function newVisit(formId: string) {
    try {
        const form = await prisma.form.findFirst({ where: { id: formId } })
        if (form?.views != undefined) {
            await prisma.form.update({ where: { id: formId }, data: { views: form.views + 1 } })

        }
    } catch (err) {
        console.log(err)
    }
}

export async function getFormSubmissions(formId: string) {
    try {
        const data = await prisma.submession.findMany({ where: { formId: formId } })
        const submissions = data.map(d => JSON.parse(d.subSchema)).filter(elem => elem)
        return { success: true, data: submissions }

    } catch (error: any) {
        return { success: false, message: error?.message }

    }
}
export async function getFormLabels(formId: string) {
    try {
        const forms = await prisma.form.findFirst({ where: { id: formId } })
        const labels = JSON.parse(forms?.schema ?? "[]").map((element: FormElement) => {
            if (element.label) {
                return element.label

            }
        }).filter((elem: any) => elem)
        return labels as string[]
    } catch (error) {
        return []
    }


}



async function canSubmit(formId: string, limit: number) {
    try {
        const subCount = (await prisma.form.findFirst({ where: { id: formId } }))?.subCount ?? 0
        if (subCount >= limit) {
            return false
        }
        return true
    } catch (error) {
        return false
    }
}