export default function LiveForm() {
    return <div className="relative w-80 h-44 border-2 p-4 border-muted  rounded-md ">
        <span className="absolute top-3 right-3 bg-destructive py-1 px-2 text-sm font-semibold rounded-md">Draft</span>
        <p className="font-bold text-foreground opacity-90  text-2xl"></p>
        <p className="text-gray-500  mt-1 "></p>
        <p className="mt-2 text-sm text-gray-400"></p>
        <button className="flex w-full bg-muted hover:grayscale-[50%]  rounded-sm py-1 mt-4"> </button>
    </div>
}