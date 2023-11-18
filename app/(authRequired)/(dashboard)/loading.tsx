import Nav from "@/components/Nav";
import StatsCardsLoading from "./StatsCardsLoading";
import AddForm from "./AddForm";
import FormDraftLoading from "./FormDraftLoading";

export default function Loading() {
    return <main>
        <Nav />
        <div className="mx-56 pt-[5vh] pb-[10vh] ">

            <StatsCardsLoading />
            <h1 className="text-4xl font-bold border-y-2 mt-10 py-8 pl-3 ">Your Forms</h1>
            <div className="flex flex-wrap mt-10 gap-3">
                <AddForm />
                {/* <SavedForms /> */}
                <FormDraftLoading />



            </div>
        </div>

    </main>
}