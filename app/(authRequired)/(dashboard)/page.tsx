
import AddForm from "./AddForm";
import Stats from "./Stats";
import SavedForms from "./SavedForms";
import Nav from "@/components/Nav";
import FormDraftLoading from "./FormDraftLoading";
import PublishedForms from "./PublishedForms";
import { Suspense } from "react";
import StatsCardsLoading from "./StatsCardsLoading";



export default async function Home() {

  return (
    <div>
      <Nav />
      <div className="lg:mx-56 pt-[5vh] pb-[10vh] ">

        <Stats />
        <h1 className="text-4xl font-bold lg:border-y-2   mt-10 py-8 pl-3 ">Your Forms</h1>
        <div className="flex flex-wrap  lg:mt-10 gap-3">
          <AddForm />
          <SavedForms />
          <Suspense fallback={<FormDraftLoading />}>

            <PublishedForms />

          </Suspense>

        </div>
      </div>

    </div>
  )
}
