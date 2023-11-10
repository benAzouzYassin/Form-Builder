"use client"
//@ts-ignore
import ConfettiGenerator from "confetti-js";
import { Toaster, toast } from "sonner";


import { Button } from "@/components/ui/button"
import { useEffect } from "react";
import { useTheme } from "next-themes";

export default function CopyBtn({ text }: { text: string }) {
    //TODO implement the confetti
    // useEffect(() => {
    //     const confettiSettings = { target: 'my-canvas', respawn: false, speed: 1, max: 100 };
    //     const confetti = new ConfettiGenerator(confettiSettings);
    //     confetti.render();

    //     return () => confetti.clear();
    // }, [])
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