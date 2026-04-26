import {Navbar} from "@/components/Navbar.tsx";
import * as React from "react";
import type {FC} from "react";

export const FrontLayout: FC<{ children: React.ReactNode }> = ({children}) => {
    return (
        <>
            <Navbar/>
            {children}
        </>
    )
}