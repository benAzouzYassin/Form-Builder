

export default function AddForm() {
    return <div className="h-44  rounded-md p-5 hover:cursor-pointer hover:bg-secondary  w-80 border-2  border-opacity-50 hover:border-muted-foreground border-dashed ">
        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" className="w-16 h-16 m-auto text-muted-foreground group-hover:text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"></path><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path></svg>
        <p className="text-muted-foreground font-medium opacity-80 mt-4 text-xl text-center">Add New Form</p>
    </div>
}