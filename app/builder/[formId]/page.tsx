"use client"
import { FormType } from "@/utils/globalTypes"
import { TopBar } from "./TopBar"
import Builder from "./Builder"
import { FormContextProvider } from "@/context/FormContext"
import { useEffect, useState } from "react"
import { useTheme } from "next-themes"
import Preview from "./Preview"
import Nav from "@/components/Nav"


export default function Page({ params }: { params: { formId: string } }) {

    const [previewMode, setPreviewMode] = useState(false)

    useEffect(() => previewMode ? hideNav() : showNav(), [previewMode])

    const startPreview = () => setPreviewMode(true)
    const closePreviewMode = () => setPreviewMode(false)

    const example: FormType = {
        id: "something",
        status: "editing",
        totalSubmissions: 50,
        totalVisits: 70,
        totalBounces: 20,
        createdAt: "2 days ago",
        description: "",
        elementsList: [],
        name: "MyForm",
        submissionsList: []

    }
    const { theme } = useTheme()

    const contentClass = previewMode ? "opacity-0  transition-all ease-out h-0 transition-700" : "opacity-1 transition-700 transition-all ease-out"

    const previewDynamicClass = previewMode ? "  w-[100vw] min-h-[99vh] pb-10  opacity-1  transition-all ease-out transition-700 overflow-y-visible " : " hidden opacity-0 transition-700 transition-all ease-out "



    function hideNav() {
        const nav = document.querySelector("nav")
        if (nav) {
            nav.style.display = "none"
        }
    }

    function showNav() {
        const nav = document.querySelector("nav")
        if (nav) {
            nav.style.display = "flex"
        }
    }

    return <div>
        <Nav />
        <main style={{ overflowY: previewMode ? "hidden" : "visible" }} className=" relative overflow-y-visible  ease-out transition-all overflow-hidden border-2 max-w-[100vw] "  >
            <FormContextProvider>
                <div className={contentClass}>
                    <TopBar formId={params.formId} startPreview={startPreview} name={example.name} />
                    <Builder formId={params.formId} />
                </div>
                <Preview closePreviewMode={closePreviewMode} className={previewDynamicClass} theme={theme} />
            </FormContextProvider>
        </main>
    </div>
}