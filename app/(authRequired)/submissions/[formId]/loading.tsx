import Nav from "@/components/Nav";
import LoadingStatCard from "./LoadingStatsCard";
import { Button } from "@/components/ui/button";

export default function loading() {
    return <>
        <Nav />

        <div className="pb-20">
            <div className="flex mt-8 border-b-[1px] items-center lg:px-56 pb-8 ">
                <div className=" w-28 h-10 font-bold text-4xl mt-auto   animate-pulse from-muted/40 to-muted/50 bg-gradient-to-r"></div>
                <Button className=" scale-90 px-12 text-md  ml-auto font-medium">Visit</Button>
            </div>
            <div className="flex mt-8 border-b-[1px] items-center px-56 pb-8">
                <input type="text" readOnly className="focus-within:outline-none focus-within:border-2   animate-pulse from-muted/40 to-muted/50 bg-gradient-to-r focus-within:border-foreground/30 pl-2 bg-background border-[1px] rounded-sm w-full py-1" />
                <Button className="ml-auto scale-90 px-12 text-md font-medium">Share link</Button>
            </div>
            <div className="flex  flex-row gap-8 px-56 mt-10  ">
                <LoadingStatCard />
                <LoadingStatCard />
                <LoadingStatCard />
                <LoadingStatCard />
            </div>
            <div className="px-56">
                <p className="text-3xl font-bold  mt-10">Submissions</p>
                <div className="w-full  mt-5">
                    <div className=" border-b-[1px] bg-accent/30  flex  gap-2 w-full pl-4 h-10 rounded-t-md items-center text-foreground/80 text-lg font-normal">
                    </div>

                </div>
            </div>
        </div>
    </>
}