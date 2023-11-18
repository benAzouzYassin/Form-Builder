"use client"

import CopyBtn from "./CopyBtn";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import { useEffect } from "react";
//@ts-ignore
import ConfettiGenerator from "confetti-js";

export default function Thanks({ params }: { params: { formId: string } }) {
    useEffect(() => {
        const confettiSettings = { target: 'confetti', respawn: false, speed: 1, max: 100 };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();

        return () => confetti.clear();
    }, [])
    return <main>
        <ThemeSwitcher />
        <canvas id="confetti" className="absolute h-full  border-2 border-white top-0 w-full"></canvas>
        <div className="flex w-full h-[90vh] flex-col px-3 overflow-hidden">
            <div className="mx-auto">
                <p className="lg:text-4xl text-2xl mt-20 text-center w-fit  font-bold h-fit border-b-[1px] pb-2">🎊🎊 Form Submitted ! 🎊🎊</p>
                <p className="text-2xl font-light text-left mb-1 mt-4">Thank you ! </p>
                <p className="text-lg text-foreground/50">Thank you for your time we really appreciate it.</p>
                <div>
                    <div className=" mt-10 mx-auto border-t-[1px] border-foreground/20 pt-8 ">
                        <input readOnly className="z-50 border-[1px] border-foreground/20 focus-within:border-foreground/40 p-2 rounded-sm  w-full focus-within:outline-none bg-background" value={`https://form-builder-one.vercel.app/form/${params.formId}`} />
                        <CopyBtn text="my-domain/forms/${params.formId}" />
                    </div>
                </div>
            </div>
        </div>
    </main>
}