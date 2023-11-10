import Link from "next/link";
import CopyBtn from "./CopyBtn";
import { RightArrow } from "@/components/icons/RightArrow";

export default function Page({ params }: { params: { formId: string } }) {

    return <main className="relative flex flex-col items-center justify-center h-[80vh]">
        <div className=" mx-auto w-[590px] text-4xl border-b-[1px] pb-3 border-foreground/20 font-extrabold">
            <p > 🎊🎊 Form Published 🎊🎊</p>
        </div>
        <div className="w-[590px] mt-10 mx-auto">
            <p className="text-2xl font-light text-left mb-1">Share this form with</p>
            <p className="text-lg text-foreground/50">Anyone with the link can view and submit the form</p>
        </div>
        <div className="w-[590px] mt-10 mx-auto border-t-[1px] border-foreground/20 pt-8 ">
            <input className="z-50 border-[1px] border-foreground/20 focus-within:border-foreground/40 p-2 rounded-sm  w-full focus-within:outline-none bg-background" value={`my-domain/forms/${params.formId}`} />
            <CopyBtn text="my-domain/forms/${params.formId}" />
        </div>
        <div className="flex w-[590px] mt-5 pt-5 border-t-[1px] border-foreground/20">
            <p className="flex items-center group transition-all ">
                <RightArrow className="rotate-180 group-hover:mr-[2px] transition-all " />
                <Link className=" border-b-[1px] group-hover:ml-[2px] transition-all border-transparent group-hover:border-white text-sm font-semibold" href="/" >Go back home</Link>
            </p>
            <p className="flex items-center group ml-auto">

                <Link className="border-b-[1px] group-hover:mr-[2px] transition-all border-transparent group-hover:border-white ml-auto text-sm font-semibold" href={`/submissions/${params.formId}`} >Form submissions</Link>
                <RightArrow className=" group-hover:ml-[2px]  transition-all " />
            </p>
        </div>
        {/* <canvas id="my-canvas" className="z-10 h-10 top-0 left-0 absolute"></canvas> */}
    </main>
}