import { ReactElement } from "react";

export function DraggableElement({ children, text }: { children: ReactElement, text: string }) {
    return <div className=" p-2 hover:bg-muted-foreground/10 hover:cursor-grab flex flex-col items-center h-24 w-24 ml-auto mr-auto rounded-sm border-foreground/30 border-2">
        {children}
        <p className="text-sm text-center mt-1 font-medium  text-foreground/80">{text}</p>
    </div>

}