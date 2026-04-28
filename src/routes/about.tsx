import {createRoute, Outlet} from "@tanstack/react-router";
import {rootRoute} from "./_root.tsx";
import Info from "@/pages/about/Info.tsx";

// 关于About的路由
const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: () => <Outlet/>
})

export const aboutInfoRoute = createRoute({
    getParentRoute: () => aboutRoute,
    path: '/info',
    component: () => <Info/>
})


export default aboutRoute;
