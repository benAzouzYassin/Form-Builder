import { FormContext } from "@/context/FormContext"
import { useContext } from "react"
import PreviewElement from "./PreviewElement"


type Props = {
    closePreviewMode: () => void
    theme?: string
    className: string
}

export default function Preview({ className, theme, closePreviewMode }: Props) {
    const formContext = useContext(FormContext)
    // console.log(formContext?.previewFormElements)


    return <div className={className} style={{ background: theme != "light" ? "url(/paper-dark.svg" : "url(/paper.svg)" }} >
        <div className="bg-background  flex  py-2 px-16"><div className="text-foreground/60  " ><span className="text-xl font-bold">Form preview</span><p className="text-sm">This is how your form will look like to your users.</p></div><span onClick={closePreviewMode} className="ml-auto my-auto scale-[85%] hover:bg-muted hover:cursor-pointer transition-all ease-in  border-2 py-1 p-3 rounded-lg font-semibold text-foreground/80 " >X</span>   </div>
        <div className="w-1/3 mx-auto mt-10  rounded-xl p-4 min-h-[800px] h-fit bg-background">

            {
                formContext?.previewFormElements.map((element, index) => <PreviewElement key={index} {...element} />)
            }
        </div>

    </div>

}