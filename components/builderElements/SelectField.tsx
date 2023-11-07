import SelectArrows from "../icons/SelectArrows"
type Props = {
    id: string
    label?: string
    helperText?: string
    placeHolder?: string
    required?: boolean
    options?: string[]
}
export default function SelectField(props: Props) {


    return <div className=" relative z-40 hover:bg-transparent hover:cursor-pointer flex-col h-[110px] justify-center bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50">
        <p className="w-full text-left ml-[24px] text-sm font-semibold mb-[2px] opacity-80">{props.label}</p>
        <div className=" h-[40px] w-[95%] mx-auto rounded-[2px] ring-1 ring-foreground/5  ring-inset bg-foreground/5 text-left text-sm text-foreground/80 font-medium  pl-2 flex items-center">{props.placeHolder} <SelectArrows className=" mr-2  ml-auto scale-150 " /></div>
        <p className="text-xs text-left text-foreground/50 font-medium ml-6 mt-1">{props.helperText}</p>

    </div>
}