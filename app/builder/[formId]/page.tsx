
import { FormType } from "@/utils/globalTypes"
import { TopBar } from "./TopBar"
import Builder from "./Builder"


export default function Page({ params }: { params: { formId: string } }) {


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
    return <main className="overflow-hidden border-2 " >
        <TopBar name={example.name} />

        <Builder />


    </main>
}