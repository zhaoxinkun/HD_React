import {createRoute, Outlet} from "@tanstack/react-router";
import Info from "@/pages/about/Info.tsx";
import Home from "@/pages/home/Home.tsx";
import Topic from "@/pages/doc/Topic.tsx";
import Live from "@/pages/live/Live.tsx";
import rootRoute from "./root.route.tsx"; //注册到根路由用的


// 关于home页路由
export const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Home/>
})

// 关于About的路由
export const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: () => <Outlet/>
})

export const aboutInfoRoute = createRoute({
    getParentRoute: () => aboutRoute,
    path: '/info',
    component: () => <Info/>
})

// 关于导航的路由
export const navTopic = createRoute({
    getParentRoute: () => rootRoute,
    path: '/topic',
    component: () => <Topic/>
})

export const navLive = createRoute({
    getParentRoute: () => rootRoute,
    path: '/live',
    component: () => <Live/>
})

