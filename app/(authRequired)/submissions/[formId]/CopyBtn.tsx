"use client";
import { Button } from "@/components/ui/button";
import { toast, Toaster } from "sonner";

export default function CopyBtn({ formLink }: { formLink: string }) {
  return (
    <Button
      onClick={() => {
        navigator.clipboard.writeText(formLink);
        toast.message("copied successfully !");
      }}
      className="ml-auto  active:scale-[85%] transition-all scale-90 px-12 text-md font-medium"
    >
      Share link
    </Button>
  );
}
