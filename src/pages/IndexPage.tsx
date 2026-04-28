import {Outlet} from "@tanstack/react-router";
import {FrontLayout} from "@/layout/FrontLayout.tsx";

const IndexPage = () => {
    return (
        <>
            <FrontLayout/>
            <main className="min-h-screen bg-gray-100">
                <Outlet/>
            </main>
        </>
    );
};
export default IndexPage;