
type Props = {
    id: string
    isEditing?: boolean
    label?: string
    helperText?: string
    placeholder?: string
    required?: boolean
    rows?: number
}

export default function TextareaField(props: Props) {


    return <div className=" relative z-50 hover:bg-transparent hover:cursor-pointer flex-col h-[140px] justify-center bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50">
        <p className="w-full text-left ml-[24px] text-sm font-semibold mb-[2px] mt-[2px] opacity-80">{props.label}</p>
        <div className=" h-[80px] w-[95%] mx-auto rounded-[2px] ring-1 ring-foreground/5  ring-inset bg-foreground/5 text-left text-sm text-foreground/40 pt-[6px] pl-2">Place Holder...</div>
        <p className="text-xs text-left text-foreground/50 font-medium ml-6 mt-1">Helper text</p>

    </div>
}