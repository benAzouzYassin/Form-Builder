import { currentUser } from "@clerk/nextjs"
import StatsCard from "./StatsCard"


export default async function Stats() {
    const user = await currentUser()
    return <div className="flex gap-5">
        <StatsCard icon="visits.svg" title="Total visits" description="All time form visits" color="#2563EB" statistic="5" />
        <StatsCard icon="submissions.svg" title="Total submissions" description="All time form submissions" color=" rgb(251 146 60)" statistic="1" />
        <StatsCard icon="subRate.svg" title="Total visits" description="Visits that result in form submission" color="rgb(34 197 94)" statistic="100%" />
        <StatsCard icon="bounce.svg" title="Bounce rate" description="Visits that leaves without interacting" color="rgb(239 68 68)" statistic="100%" />
    </div>
}