import { FormElement } from "@/utils/globalTypes";
import { Input } from "@/components/ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { CalendarIcon } from "@radix-ui/react-icons";
import { Calendar } from "../ui/calendar";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { format } from "date-fns";

type Props = {} & FormElement

export default function PreviewDateField(props: Props) {
    const [date, setDate] = useState<Date>()


    function formatDateForInput(date: Date | undefined) {
        const year = date?.getFullYear();


        const month = date?.toLocaleDateString().split("/")[0].padStart(2, "0")

        const day = date?.getDate().toString().padStart(2, '0');

        return `${year}-${month}-${day}`;
    }


    return <div className="flex flex-col mt-1 z-50">
        <label htmlFor={props.id} className=" mb-1 ml-2 text-md"> {props.label}</label>
        <Popover>
            <PopoverTrigger asChild >
                <Button
                    name={props.label ?? props.placeHolder}
                    onClick={() => console.log("")}
                    variant={"outline"}
                    className={cn(
                        "w-full z-50 justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                    )}

                >
                    <CalendarIcon className="mr-2 h-4 w-4" />
                    {date ? format(date, "PPP") : <span>{props.placeHolder}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
                <Calendar

                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus

                />
            </PopoverContent>
        </Popover>
        <input type="date" name={props.label} value={formatDateForInput(date)} className="hidden" />
        <p className="ml-3 text-sm mt-1 text-foreground/70">{props.helperText}</p>
    </div>
}