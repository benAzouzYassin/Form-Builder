import AddForm from "./AddForm";
import FormDraft from "./FormDraft";
import LiveForm from "./LiveForm";
import Stats from "./Stats";

export default function Home() {
  return (
    <div className="mx-56 pt-[15vh] ">
      <Stats />
      <h1 className="text-4xl font-bold border-y-2 mt-10 py-8 pl-3 ">Your Forms</h1>
      <div className="flex flex-wrap mt-10 gap-5">
        <AddForm />
        <FormDraft id="" description="" name="MyForm" createdAt="1 day" status="editing" totalVisits={10} totalSubmissions={5} />
        <FormDraft id="" description="" name="MyForm" createdAt="1 day" status="published" totalVisits={10} totalSubmissions={5} />
        <FormDraft id="" description="" name="MyForm" createdAt="1 day" status="published" totalVisits={10} totalSubmissions={5} />
        <FormDraft id="" description="" name="MyForm" createdAt="1 day" status="published" totalVisits={10} totalSubmissions={5} />
        <FormDraft id="" description="" name="MyForm" createdAt="1 day" status="published" totalVisits={10} totalSubmissions={5} />
        <FormDraft id="" description="" name="MyForm" createdAt="1 day" status="published" totalVisits={10} totalSubmissions={5} />
        <FormDraft id="" description="" name="MyForm" createdAt="1 day" status="published" totalVisits={10} totalSubmissions={5} />

      </div>
    </div>
  )
}
