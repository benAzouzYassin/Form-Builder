
import ThemeSwitcher from "@/components/ThemeSwitcher";
import Warning from "@/components/icons/Warning";

export default function LimitErr() {

    return <main>
        <ThemeSwitcher />
        <div className="flex w-full h-[90vh] flex-col  overflow-hidden">
            <div className="mx-auto">
                <p className="text-4xl mt-20 text-center w-fit  font-bold h-fit border-b-[1px] pb-2 flex items-center"><Warning className="w-10" /><Warning className="w-10" /> Form was not published ! <Warning className="w-10" /><Warning className="w-10" /></p>
                <p className="text-2xl font-light text-left mb-1 mt-4">You have reached the limit ! </p>
                <p className="text-lg text-foreground/80 border-b-[1px] pb-4">We are sad to inform you that you reached the limit of the possible forms.</p>
                <p className="text-lg text-foreground/60 mt-4">Note that we are going to add a paid subscription to address this issue.</p>
                <p className="text-lg text-foreground/50">If you think there is and error please contact us. <small className="hover:text-foreground/90 transition-all"><a href="mailto:yassinebenazouz123@gmail.com">(yassinebenazouz123@gmail.com)</a></small></p>

            </div>
        </div>
    </main>
}
