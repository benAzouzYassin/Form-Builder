import { prisma } from "@/prisma/client"
import { currentUser, useAuth } from "@clerk/nextjs"

export async function getUserStats() {
    try {

        const userData = await currentUser()
        const userMail = userData?.emailAddresses[0].emailAddress
        const userForms = await prisma.form.findMany({ where: { ownerEmail: userMail } })
        const formsViews = userForms.reduce((prev, curr) => prev + curr.views, 0)
        if (formsViews <= 0) {
            return { success: true, stats: { formsViews: 0, formSubmissions: 0, submissionsRate: 0, bounceRate: 0 } }

        }
        const formSubmissions = userForms.reduce((prev, curr) => prev + curr.subCount, 0)
        const submissionsRate = formSubmissions * 100 / formsViews
        const bounceRate = 100 - submissionsRate ?? 0
        return { success: true, stats: { formsViews: formsViews, formSubmissions: formSubmissions, submissionsRate: submissionsRate.toFixed(), bounceRate: bounceRate.toFixed() } }
    } catch (error: any) {
        return { success: false, stats: { formsViews: 0, formSubmissions: 0, submissionsRate: 0, bounceRate: 0 }, message: error?.message }
    }


}