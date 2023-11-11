import StatsCard from "@/app/(dashboard)/StatsCard";
import { Button } from "@/components/ui/button";

export default async function Page({ params }: { params: { formId: string } }) {
    //TODO test what happent when there is a lot of labels

    const labels = ["name", "age", "choice"]
    const answers = [["yassine", 20, "yes"], ["houssem", 19, "yes"], ["houssem", 19, "yes"], ["houssem", 19, "yes"], ["houssem", 19, "yes"], ["yahia", 20, "no"], ["rayen", 19, "no"]]
    let widthPercent = ""
    if (labels.length > 0) {

        widthPercent = parseInt((100 / labels.length).toString()) + "%"
    }
    return <main className="pb-20">
        <div className="flex mt-8 border-b-[1px] items-center px-56 pb-8 ">
            <p className="font-bold text-4xl mt-auto">Form name</p>
            <Button className="ml-auto scale-90 px-12 text-md font-medium">Visit</Button>
        </div>
        <div className="flex mt-8 border-b-[1px] items-center px-56 pb-8">
            <input type="text" readOnly value={`my-domain/forms/${params.formId}`} className="focus-within:outline-none focus-within:border-2 focus-within:border-foreground/30 pl-2 bg-background border-[1px] rounded-sm w-full py-1" />
            <Button className="ml-auto scale-90 px-12 text-md font-medium">Share link</Button>
        </div>
        <div className="flex  flex-row gap-8 px-56 mt-10  ">
            <StatsCard icon="visits.svg" title="Total visits" description="All time form visits" color="#2563EB" statistic="5" />
            <StatsCard icon="submissions.svg" title="Total submissions" description="All time form submissions" color=" rgb(251 146 60)" statistic="1" />
            <StatsCard icon="subRate.svg" title="Total visits" description="Visits that result in form submission" color="rgb(34 197 94)" statistic="100%" />
            <StatsCard icon="bounce.svg" title="Bounce rate" description="Visits that leaves without interacting" color="rgb(239 68 68)" statistic="100%" />
        </div>
        <div className="px-56">
            <p className="text-3xl font-bold  mt-10">Submissions</p>
            <div className="w-full  mt-5">
                <div className=" border-b-[1px] bg-accent/30  flex  gap-2 w-full pl-4 h-10 rounded-t-md items-center text-foreground/80 text-lg font-normal">
                    {labels.map((label, index) => <span style={{ width: widthPercent }} className="" key={index}>{label}</span>)}
                </div>
                {answers.map((data, index) => <div className="hover:bg-accent/10 hover:cursor-pointer flex pl-4 border-b-[1px] h-10 items-center text-sm text-foreground/60 font-semibold gap-3 w-full" key={index}>{data.map((answer, index) => <span style={{ width: widthPercent }} key={index}>{answer}</span>)}</div>)}
            </div>
        </div>
    </main>

}