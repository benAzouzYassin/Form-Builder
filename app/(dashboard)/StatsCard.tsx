
type Props = {
    title: string
    statistic: string
    description: string
    color: string
    icon: string
}
export default async function Stats(props: Props) {

    return <div style={{ boxShadow: `1px 1px 10px ${props.color}` }} className="h-40 w-64 shadow-md hover:-translate-y-1 hover:cursor-pointer transition-transform  rounded-md p-5 ">
        <img src={`/icons/${props.icon}`} className="ml-auto" />
        <p className="text-muted-foreground text-lg font-medium">{props.title}</p>
        <p className="text-muted-foreground font-semibold text-4xl my-2 ml-2">{props.statistic}</p>
        <p className="text-slate-400 text-xs pt-2 font-base">{props.description}</p>
    </div >
}