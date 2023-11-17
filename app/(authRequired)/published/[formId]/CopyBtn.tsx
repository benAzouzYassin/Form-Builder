"use client"

import { Toaster, toast } from "sonner";


import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes";

export default function CopyBtn({ text }: { text: string }) {

    const { theme } = useTheme()
    return <>


        <Button onClick={() => {
            navigator.clipboard.writeText(text)
            toast.message("copied successfully !")
        }} className=" w-full mt-5 font-medium" >Copy link</Button>
        <Toaster
            richColors
            toastOptions={{
                style: { fontSize: "16px", backgroundColor: "transparent", color: theme === "dark" ? "white" : "black", },
            }}

        />

    </>
}