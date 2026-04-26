import {createRootRoute, createRoute, createRouter, Outlet} from '@tanstack/react-router'
import {TanStackRouterDevtools} from '@tanstack/react-router-devtools'
import Home from "@/pages/Home/Home.tsx";
import About from "@/pages/About/About.tsx";


// 跟路由
export const rootRoute = createRootRoute({
    component: () => (
        <>
            <Outlet/>
            <TanStackRouterDevtools/>
        </>
    ),
})

// 创建页面级路由配置
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Home/>
})

const aboutRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/about',
    component: () => <About/>
})


// 构建路由树
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute])

// 创建路由
const router = createRouter({routeTree})

export default router;