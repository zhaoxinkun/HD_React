import {createRoute, Outlet} from "@tanstack/react-router";
import Info from "@/pages/about/Info.tsx";
import Home from "@/pages/home/Home.tsx";
import Article from "../pages/doc/Article.tsx";
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
export const navArticle = createRoute({
    getParentRoute: () => rootRoute,
    path: '/article',
    component: () => <Article/>
})

export const navLive = createRoute({
    getParentRoute: () => rootRoute,
    path: '/live',
    component: () => <Live/>
})

