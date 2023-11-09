"use client"

import * as React from "react"
import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@/lib/utils"

type Props = {
  cb: (value: string) => void
  className: string
} & typeof SliderPrimitive.Root

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  Props
>(({ cb, className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track onClick={() => cb(document.getElementById("slider-thumb")?.ariaValueNow ?? "30")} className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20">
      <SliderPrimitive.Range onClick={() => cb(document.getElementById("slider-thumb")?.ariaValueNow ?? "30")} className="absolute h-full bg-primary" />
    </SliderPrimitive.Track >
    <SliderPrimitive.Thumb onClick={(e) => cb(document.getElementById("slider-thumb")?.ariaValueNow ?? "30")} id="slider-thumb" className="block h-4 w-4 rounded-full border border-primary/50 bg-background shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
  </SliderPrimitive.Root>
))
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
