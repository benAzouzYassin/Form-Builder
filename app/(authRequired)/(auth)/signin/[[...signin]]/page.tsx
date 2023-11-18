import { SignIn } from "@clerk/nextjs";

export default function Page() {

    return <main className="flex items-center lg:px-0 px-20 justify-center h-[100vh]">
        <SignIn />

    </main>
}