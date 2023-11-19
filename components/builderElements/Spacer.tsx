

export default function Spacer({ id, height }: { height?: number, id: string }) {
    return <div style={{ height: `${height}px` }} className=" overflow-hidden hover:cursor-pointer relative  hover:bg-transparent  h-[60px] bg-foreground/5 rounded-sm ring-inset ring-accent ring-2  flex  text-center transition-all  hover:text-opacity-50" >
    </div>
}