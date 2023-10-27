import { useDraggable } from "@dnd-kit/core";
import { CSSProperties, ReactElement, useMemo } from "react";

type Props = { children: ReactElement, text: string, scrollTopVal: number }
export function DraggableElement({ children, text, scrollTopVal }: Props) {

    const { attributes, listeners, setNodeRef, transform, isDragging, over, active, activatorEvent } = useDraggable({
        id: text,
    });

    //@ts-ignore
    const style: CSSProperties = transform ? {
        transform: `translate3d(${transform.x}px, ${over ? transform.y : transform.y - scrollTopVal}px, 1px)`,
        zIndex: "50",
        position: "absolute",
        opacity: 1,
        backgroundColor: "Background"
    } : undefined;

    return <div >
        <div id={text} ref={setNodeRef} style={style} className=" p-2 z-50  hover:bg-muted-foreground/10  hover:cursor-grab flex flex-col items-center h-24 w-24 ml-auto mr-auto rounded-sm border-foreground/30 border-2"  {...attributes}{...listeners}>
            {children}
            <p className=" text-sm text-center mt-1 font-medium  text-foreground/80">{text}</p>
        </div>
        {isDragging && <div className=" p-2  h-24 w-24 ml-auto mr-auto ">
        </div>}
    </div>

}