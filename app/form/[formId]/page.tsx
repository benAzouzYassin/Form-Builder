

import { getFormById, newVisit, submitFormAction } from "@/actions/formActions"
import { BuilderElementType } from "@/utils/globalTypes"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import Form from "./Form"


export default async function Page({ params }: { params: { formId: string } }) {
    const { data } = await getFormById(params.formId)

    const schema: BuilderElementType[] = JSON.parse(data?.schema ?? "[]")

    newVisit(params.formId)

    return <main className="flex flex-col pb-20 ">
        <div className="w-full">
            <ThemeSwitcher />
        </div>
        <Form formId={params.formId} formSchema={data?.schema ?? ""} />

    </main>
}