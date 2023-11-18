import { RightArrow } from "@/components/icons/RightArrow";
import CopyBtn from "./CopyBtn";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";

export default function LoadingPage() {
    return <main>

        <Nav />
        <div className="relative flex flex-col items-center justify-center h-[80vh]">
            <div className=" mx-auto w-[590px] text-4xl border-b-[1px] pb-3 border-foreground/20 font-extrabold">
                <p className="">Publishing your form...</p>
            </div>
            <div className="w-[590px] mt-10 mx-auto">
                <p className="text-2xl font-light text-left mb-1 from-muted/40 to-muted/50 animate-pulse bg-gradient-to-r w-96 h-7"></p>
                <p className="text-2xl font-light text-left mb-1 from-muted/40 to-muted/50 animate-pulse bg-gradient-to-r w-72 h-7 mt-2"></p>

            </div>
            <div className="w-[590px] mt-10 mx-auto border-t-[1px] border-foreground/20 pt-8 ">
                <input readOnly value="" className="from-muted/40 to-muted/50 animate-pulse bg-gradient-to-r  border-[1px] border-foreground/20 focus-within:border-foreground/40 p-2 rounded-sm  w-full focus-within:outline-none bg-background" />
                <Button className=" w-full mt-5 font-medium" disabled>Copy link</Button>            </div>
            <div className="flex w-[590px] mt-5 pt-5 border-t-[1px] border-foreground/20">
                <div className="flex items-center group transition-all ">
                    <RightArrow className="rotate-180 group-hover:mr-[2px] transition-all " />
                    <div className=" border-b-[1px] group-hover:ml-[2px] transition-all border-transparent group-hover:border-white text-sm font-semibold" >Go back home</div>
                </div>
                <p className="flex items-center group ml-auto">
                    <div className="border-b-[1px] group-hover:mr-[2px] transition-all border-transparent group-hover:border-white ml-auto text-sm font-semibold"  >Preview form</div>
                    <RightArrow className=" group-hover:ml-[2px]  transition-all " />
                </p>
            </div>
            {/* <canvas id="my-canvas" className="z-10 h-10 top-0 left-0 absolute"></canvas> */}
        </div>
    </main>
}