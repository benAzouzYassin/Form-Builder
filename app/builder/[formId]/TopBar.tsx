import Preview from "@/components/icons/Preview";
import Publish from "@/components/icons/Publish";
import Save from "@/components/icons/Save";


type Props = {
    name: string
}

export function TopBar(props: Props) {
    return <div className="gap-5 h-[8vh] w-full border-b-2 px-20 shadow-background shadow-sm flex items-center">
        <p><span className="text-xl font-semibold opacity-90">Form</span> : {props.name}</p>
        <button className="hover:bg-muted  rounded-md py-2 px-4 border-2  ml-auto flex  items-center"><Preview className="" /> Preview</button>
        <button className="hover:bg-muted flex  items-center  rounded-md py-2 px-5 border-2"><Save className="" /> Save</button>
        <button className="flex  items-center  rounded-md py-2 px-5 border-2  bg-gradient-to-r from-[#7C90F8] to-[#2ACDEF] hover:from-[#5768c0] hover:to-[#29a9c3]  "><Publish className="" /> Publish</button>
    </div>
}