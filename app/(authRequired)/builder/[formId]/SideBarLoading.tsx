import SideLoadingItem from "./SideLoadingItem";

export default function SideBarLoading() {
    return <aside className=" max-w-[20%]  ml-auto px-8  pt-5 h-fit overflow-hidden" >

        <p className="text-foreground/70 border-b-[1px] py-1 ">Drag and drop elements</p>

        <p className="text-foreground/70  mt-3" >Layout elements</p>
        <div className="flex flex-wrap gap-5 pt-5">
            <SideLoadingItem />
            <SideLoadingItem />
            <SideLoadingItem />
            <SideLoadingItem />
            <SideLoadingItem />

            <div className="w-24"></div>
        </div>
        <p className="text-foreground/70  mt-5" >Form elements</p>
        <div className="flex flex-wrap gap-5 pt-5">
            <SideLoadingItem />
            <SideLoadingItem />
            <SideLoadingItem />
            <SideLoadingItem />
            <SideLoadingItem />
            <SideLoadingItem />
            <div className="w-24"></div>
        </div>
    </aside>
}