"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"


export default function AddForm() {
    const [nameInput, setNameInput] = useState("")
    const [description, setDescription] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const router = useRouter()
    useEffect(() => {
        setErrorMessage("")
    }, [])

    useEffect(() => {
        if (errorMessage !== "") {
            setIsLoading(false)
        }
    }, [errorMessage])

    const handleSubmit = () => {

        if (nameInput.length > 16) {
            setErrorMessage("Name is too long !")
            return
        }

        if (nameInput.length < 4) {
            setErrorMessage("Name is too short !")
            return
        }
        if (description.length > 50) {
            setErrorMessage("description is too long !")
            return
        }
        setIsLoading(true)
        const formId = crypto.randomUUID()
        const oldForms = JSON.parse(localStorage.getItem("forms") ?? "[]")
        localStorage.setItem("forms", JSON.stringify([...oldForms, { formName: nameInput, formDesc: description, formId: formId, data: [] }]))
        const params = `formName=${nameInput}&formDesc=${description}`
        router.push(`/builder/${formId}?${params}`)
    }
    return (
        <Dialog>
            <DialogTrigger className="w-[32%]">
                <>
                    <div className="h-44 w-full  rounded-md p-5 hover:cursor-pointer hover:bg-secondary  border-2  border-opacity-50 hover:border-muted-foreground border-dashed ">
                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="w-16 h-16 m-auto text-muted-foreground group-hover:text-primary" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"></path><path d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"></path></svg>
                        <p className="text-muted-foreground font-medium opacity-80 mt-4 text-xl text-center">Add New Form</p>
                    </div>
                </>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Add new form</DialogTitle>
                    <DialogDescription>
                        Create new form to start collecting responses !
                    </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-4 py-4">
                    <div >
                        <label htmlFor="name" className="text-foreground/80 font-medium">
                            Form name
                        </label>
                        <Input id="name" placeholder="Type here..." className="mt-2" onChange={(e) => setNameInput(e.target.value)} value={nameInput} />
                        <p className="text-red-500 font-medium">{errorMessage}</p>
                    </div>
                    <div className="w-full flex flex-col">
                        <label htmlFor="username" className="font-medium text-foreground/80">
                            Description
                        </label>
                        <textarea value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Describe your form..." className=" h-full mt-2 flex  w- rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"></textarea>
                    </div>
                </div>
                <DialogFooter>
                    <Button className="w-full" disabled={isLoading} onClick={handleSubmit} >{!isLoading && "Save form"} {isLoading && <div className="w-10 h-2 flex "><span className="w-2 h-2 bg-background/60 animate-bounce rounded-full  duration-500 "></span><span className=" ml-[2px] w-2 h-2 bg-background/60 animate-bounce rounded-full delay-100  duration-500  "></span><span className="ml-[2px] w-2 h-2 bg-background/60 delay-150 duration-500 animate-bounce  rounded-full"></span></div>}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}