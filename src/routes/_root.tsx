import {createRootRoute, createRoute, createRouter} from '@tanstack/react-router'
import Home from "../pages/home/Home.tsx";
import aboutRoute, {aboutInfoRoute} from "./about.tsx";
import {navLive, navTopic} from "./nav.tsx";
import {IndexPage} from "@/pages/IndexPage.tsx";

// 跟路由
export const rootRoute = createRootRoute({
    component: () => <IndexPage/>,
})

// 创建页面级路由配置
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Home/>
})


// 构建路由树
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute.addChildren([aboutInfoRoute]), navLive, navTopic])

// 创建路由
const router = createRouter({routeTree})

export default router;