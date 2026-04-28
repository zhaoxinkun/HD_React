import {Outlet} from "@tanstack/react-router";
import {Navbar} from "@/components/Navbar.tsx";

const RootLayout = () => {

    return (
        <>
            <Navbar/>
            <main className="min-h-screen bg-gray-100">
                <Outlet/>
            </main>
        </>
    )

}

export default RootLayout;