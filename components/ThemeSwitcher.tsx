"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Tabs, TabsList, TabsTrigger } from './ui/tabs'
import { SunIcon, MoonIcon, DesktopIcon } from '@radix-ui/react-icons'

const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()


    useEffect(() => {
        setMounted(true)
    }, [])


    return (
        <>
            {mounted && <Tabs defaultValue={theme} className="hidden opacity-0 lg:block w-fit lg:ml-auto mr-auto ml-2 lg:mr-10 h-fit ">
                <TabsList className='rounded-sm ml-auto mt-3 '>
                    <TabsTrigger onClick={() => setTheme("system")} className=' opacity-0  py-1 px-3 scale-150 mx-2 rounded-sm' value="system"><DesktopIcon /></TabsTrigger>
                    <TabsTrigger onClick={() => setTheme("dark")} className=' opacity-0  py-1 px-3 scale-150 mx-2 rounded-sm' value="dark"><MoonIcon /></TabsTrigger>
                    <TabsTrigger onClick={() => setTheme("ligh")} className=' opacity-0 py-1 px-3 scale-150 mx-2 rounded-sm' value="light"><SunIcon /></TabsTrigger>
                </TabsList>

            </Tabs>}

        </>

    )
}

export default ThemeSwitcher

