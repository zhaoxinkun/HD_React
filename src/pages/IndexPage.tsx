import {Outlet} from "@tanstack/react-router";
import {FrontLayout} from "@/layout/FrontLayout.tsx";

export const IndexPage = () => {
    return (
        <>
            <FrontLayout></FrontLayout>
            <Outlet></Outlet>
        </>
    );
};