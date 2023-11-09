"use server"
import { prisma } from "@/prisma/client"
import { currentUser } from "@clerk/nextjs"
export async function saveUser() {
    const user = await currentUser()
    const email = user?.emailAddresses[0].emailAddress
    if (email && email.length > 0) {
        const newUser = await prisma.user.create({
            data: {
                email: email
            }
        })
        console.log(newUser)
    }

}