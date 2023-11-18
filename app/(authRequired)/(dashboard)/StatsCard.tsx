import { Suspense } from "react"
import StatsCardsLoading from "./StatsCardsLoading"

type Props = {
    title: string
    statistic: string
    description: string
    color: string
    icon: string
}
export default async function Stats(props: Props) {

    return <Suspense fallback={<StatsCardsLoading />}>
        <div style={{ boxShadow: `2px 4px 6px 1px ${props.color}` }} className="h-40 lg:w-64  w-72 lg:mx-0 mx-auto shadow-md hover:-translate-y-1 hover:cursor-pointer transition-transform  rounded-md p-5 ">
            <img src={`/icons/${props.icon}`} className="ml-auto" />
            <p className="text-muted-foreground text-lg font-medium">{props.title}</p>
            <p className="text-muted-foreground font-semibold text-4xl  ml-1">{props.statistic}</p>
            <p className="text-slate-400 text-xs pt-2 font-base">{props.description}</p>
        </div >
    </Suspense>
}