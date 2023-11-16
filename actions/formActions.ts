"use server"
import { prisma } from "@/prisma/client"
import { currentUser } from "@clerk/nextjs"




export async function publishFormAction(formName: string, formDesc: string, formSchema: string) {
    try {
        const userData = await currentUser()
        const userMail = userData?.emailAddresses[0].emailAddress
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
            return { success: true }
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
    const result: any = []
    const formId = data.get("formId")?.toString()
    data.forEach((value, key) => {
        if (!key.startsWith("$ACTION_ID") && !key.startsWith("formId")) {
            result.push({ [key]: value })
        }
    }
    )

    try {

        const form = await prisma.form.findFirst({ where: { id: formId } })
        if (form?.subCount != undefined) {
            await prisma.form.update({ where: { id: formId }, data: { subCount: form.subCount + 1 } })

        }

        const submessionRes = await prisma.submession.create({
            data: {
                formId: formId ?? "",
                subSchema: JSON.stringify(result)
            }
        })
        if (submessionRes) {
            return { success: true }
        } else {
            return { success: false }
        }
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