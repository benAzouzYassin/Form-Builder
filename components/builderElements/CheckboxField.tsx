
type Props = {
    id: string
    label?: string
}

export function CheckboxField(props: Props) {

    return <div className="  overflow-hidden relative z-40 hover:bg-transparent hover:cursor-pointer flex-col h-[80px] justify-center bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all hover:text-opacity-50">
        <div className="flex ml-5 gap-2 items-center">
            <div className="w-4 h-4 ring-2 rounded ring-foreground/30"> </div>
            <p className="w-full text-left text-sm  font-medium   opacity-80">{props.label}</p>
        </div>
    </div>
}