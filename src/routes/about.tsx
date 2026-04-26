import {createRoute, Outlet} from "@tanstack/react-router";
import {rootRoute} from "./_root.tsx";
import Info from "@/pages/About/Info.tsx";

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: () => <Outlet/>
})

export const infoRoute = createRoute({
    getParentRoute: () => aboutRoute,
    path: '/info',
    component: () => <Info/>
})


export default aboutRoute;
