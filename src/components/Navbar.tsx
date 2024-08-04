'use client'

import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

function Navbar({ className }: { className?: string }) {

    const [active, setActive] = useState<string | null>(null);


    return (
        <div
            className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 bg-black rounded-full", className)}
        >
            <Menu setActive={setActive}>
                <Link href='/'>
                    <MenuItem setActive={setActive} active={active} item="Home">
                    </MenuItem>
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                    <div className="flex flex-col space-x-2 items-center justify-center">
                        <HoveredLink href="/classical-music">Classical Music</HoveredLink>
                        <HoveredLink href="/traditional-music">Traditional music</HoveredLink>
                        <HoveredLink href="/normal-music">Normal Music</HoveredLink>
                    </div>
                </MenuItem>
                <Link href={'/contact'}>
                    <MenuItem setActive={setActive} active={active} item="Contact us">
                    </MenuItem>
                </Link>
            </Menu>
        </div>
    )
}

export default Navbar
