
import AddForm from "./AddForm";
import FormDraft from "./FormDraft";
import Stats from "./Stats";
import SavedForms from "./SavedForms";
import getPublishedForms from "@/actions/formActions";



export default async function Home() {

  const formsData = await getPublishedForms()

  return (
    <div className="mx-56 pt-[5vh] pb-[10vh] ">
      <Stats />
      <h1 className="text-4xl font-bold border-y-2 mt-10 py-8 pl-3 ">Your Forms</h1>
      <div className="flex flex-wrap mt-10 gap-5">
        <AddForm />
        <SavedForms />
        {formsData.success && formsData.data?.map(elem => <FormDraft key={elem.id} {...elem} status="published" />)}
      </div>
    </div>
  )
}
