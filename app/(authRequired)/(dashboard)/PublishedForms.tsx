"use server"
import { getPublishedForms } from "@/actions/formActions"
import FormDraft from "./FormDraft"

export default async function PublishedForms() {
    const formsData = await getPublishedForms()

    return <>
        {formsData.success && formsData.data?.map(elem => <FormDraft key={elem.id} {...elem} status="published" />)}
    </>

}