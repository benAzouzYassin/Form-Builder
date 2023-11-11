"use server"
import { prisma } from "@/prisma/client"
import { currentUser } from "@clerk/nextjs"




export async function publishFormAction(formName: string, formDesc: string, formSchema: string) {
    try {
        const userData = await currentUser()
        const userMail = userData?.emailAddresses[0].emailAddress
        console.log(userMail)
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

export default async function getPublishedForms() {
    try {
        const forms = await prisma.form.findMany()
        return { success: true, data: forms }
    } catch (error: any) {
        return { success: false, message: error.message }
    }
}