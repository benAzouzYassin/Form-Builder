


import { getUserStats } from "@/actions/userActions"
import StatsCard from "./StatsCard"


export default async function Stats() {
    const { stats } = await getUserStats()
    return <div className="flex w-full lg:flex-nowrap  flex-wrap gap-5 ">
        <StatsCard icon="visits.svg" title="Total visits" description="All time forms visits" color="#2563EB" statistic={stats.formsViews.toString()} />
        <StatsCard icon="submissions.svg" title="Total submissions" description="All time forms submissions" color=" rgb(251 146 60)" statistic={stats.formSubmissions.toString()} />
        <StatsCard icon="subRate.svg" title="Submissions rate" description="Visits that result in forms submissions" color="rgb(34 197 94)" statistic={stats.submissionsRate.toString() + "%"} />
        <StatsCard icon="bounce.svg" title="Bounce rate" description="Visits that leaves without interacting" color="rgb(239 68 68)" statistic={stats.bounceRate.toString() + "%"} />
    </div>
}