import { Button } from "@/components/ui/button";
import SideBarLoading from "./SideBarLoading";
import Save from "@/components/icons/Save";
import Preview from "@/components/icons/Preview";
import Publish from "@/components/icons/Publish";

export default function Loading() {
    return <main>
        <div className="  bg-background mb-1  gap-5 h-[8vh] w-full border-b-2 px-20 shadow-background shadow-sm flex items-center">
            <p><span className="text-xl font-semibold opacity-90">Form</span> : <div className="h-10 w-20 "></div></p>
            <button className="hover:bg-muted  rounded-md py-2 px-4 border-2  ml-auto flex  items-center"><Preview className="" />Preview</button>
            <button className="hover:bg-muted flex  items-center  rounded-md py-2 px-5 border-2"><Save className="" /> Save</button>
            <Button className="flex  items-center text-white scale-105 font-medium rounded-md py-2 px-5 border-2  bg-gradient-to-r from-[#7C90F8] to-[#2ACDEF] hover:from-[#5768c0] hover:to-[#29a9c3]  "><Publish className="" /> Publish</Button>
        </div>

        {/*this is the builder*/}
        <div className="flex max-w-[100vw]  overflow-hidden   ">
            <div>

                <div className="w-[80%] overflow-auto border-2 "  >
                    <div className=" px-3 gap-2 flex flex-col pt-3 bg-background max-w-[900px] pb-4 min-h-[77vh] mt-[2%] rounded-md shadow-md m-auto  " id="droppable" >
                        < p className=" justify-center pt-[30vh] mx-auto opacity-60  text-5xl text-center font-semibold text-muted-foreground">Drop here</p>
                    </div>
                </div >

            </div>
            <SideBarLoading />
        </div>


    </main>
}