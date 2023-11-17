import { getFormById, getFormLabels, getFormSubmissions } from "@/actions/formActions";
import StatsCard from "@/app/(authRequired)/(dashboard)/StatsCard";
import Nav from "@/components/Nav";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Page({ params }: { params: { formId: string } }) {
    const form = await getFormById(params.formId)
    const calcSubRate = (views: number | undefined, subCount: number | undefined) => {
        if (views && subCount) {
            return (subCount * 100 / views).toFixed().toString() + "%"
        }
        return "0%"
    }
    const calcBounceRate = (views: number | undefined, subCount: number | undefined) => {
        if (views && subCount) {
            return (100 - (subCount * 100 / views)).toFixed().toString() + "%"
        }
        return "0%"
    }
    const submissions = await getFormSubmissions(params.formId)

    const labels = await getFormLabels(params.formId)
    const answers = extractAnswers(submissions.data, labels)


    let widthPercent = ""
    if (labels.length > 0) {

        widthPercent = parseInt((100 / labels.length).toString()) + "%"
    }
    return <div>
        <Nav />

        <div className="pb-20">
            <div className="flex mt-8 border-b-[1px] items-center px-56 pb-8 ">
                <p className="font-bold text-4xl mt-auto">{form.data?.name}</p>
                <Link href={`/form/${params.formId}`} className="ml-auto" ><Button className=" scale-90 px-12 text-md font-medium">Visit</Button></Link>
            </div>
            <div className="flex mt-8 border-b-[1px] items-center px-56 pb-8">
                <input type="text" readOnly value={`my-domain/form/${params.formId}`} className="focus-within:outline-none focus-within:border-2 focus-within:border-foreground/30 pl-2 bg-background border-[1px] rounded-sm w-full py-1" />
                <Button className="ml-auto scale-90 px-12 text-md font-medium">Share link</Button>
            </div>
            <div className="flex  flex-row gap-8 px-56 mt-10  ">
                <StatsCard icon="visits.svg" title="Total visits" description="All time form visits" color="#2563EB" statistic={form.data?.views.toString() ?? "0"} />
                <StatsCard icon="submissions.svg" title="Total submissions" description="All time form submissions" color=" rgb(251 146 60)" statistic={form.data?.subCount.toString() ?? "0"} />
                <StatsCard icon="subRate.svg" title="Submissions rate" description="Visits that result in form submission" color="rgb(34 197 94)" statistic={calcSubRate(form.data?.views, form.data?.subCount)} />
                <StatsCard icon="bounce.svg" title="Bounce rate" description="Visits that leaves without interacting" color="rgb(239 68 68)" statistic={calcBounceRate(form.data?.views, form.data?.subCount)} />
            </div>
            <div className="px-56">
                <p className="text-3xl font-bold  mt-10">Submissions</p>
                <div className="w-full  mt-5">
                    <div className=" border-b-[1px] bg-accent/30  flex  gap-2 w-full pl-4 h-10 rounded-t-md items-center text-foreground/80 text-lg font-normal">
                        {labels.map((label, index) => <span style={{ width: widthPercent }} className="text-sm" key={index}>{label.replace(":", "").trim()}</span>)}
                    </div>

                    {answers.map((data, index) => <div className="hover:bg-accent/10 hover:cursor-pointer flex pl-4 border-b-[1px] h-10 items-center text-sm text-foreground/60 font-semibold gap-3 w-full" key={index}>{data.map((answer, index) => <span style={{ width: widthPercent }} key={index}>{answer}</span>)}</div>)}
                </div>
            </div>
        </div>
    </div>

}

function extractAnswers(submissions: any[] | undefined, labels: string[]) {
    if (!submissions) {
        return []
    }
    const answers = [];

    for (let i = 0; i < submissions.length; i++) {
        const currentObj = submissions[i];
        const currentAnswer = [];

        for (const label of labels) {
            if (currentObj[label]) {
                currentAnswer.push(currentObj[label]);
            } else {
                currentAnswer.push("");
            }
        }
        answers.push(currentAnswer);
    }
    return answers
}
