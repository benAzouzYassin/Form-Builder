

import { getFormById, newVisit, submitFormAction } from "@/actions/formActions"
import { BuilderElementType } from "@/utils/globalTypes"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import Form from "./Form"


export default async function Page({ params }: { params: { formId: string } }) {
    const { data } = await getFormById(params.formId)

    const schema: BuilderElementType[] = JSON.parse(data?.schema ?? "[]")

    newVisit(params.formId)

    return <main className="flex px-2 lg:px-0 min-h-[100vh] flex-col pb-20 overflow-x-hidden ">
        <div className="w-full">
            <ThemeSwitcher />
        </div>
        <Form formId={params.formId} formSchema={data?.schema ?? ""} />

    </main>
}