import {createRootRoute, createRoute, createRouter, Outlet} from '@tanstack/react-router'
import Home from "@/pages/Home/Home.tsx";
import aboutRoute, {infoRoute} from "./about.tsx";
import {FrontLayout} from "@/layout/FrontLayout.tsx";

// 跟路由
export const rootRoute = createRootRoute({
    component: () => (
        <>
            <FrontLayout>
                <Outlet/>
            </FrontLayout>

        </>
    ),
})

// 创建页面级路由配置
const indexRoute = createRoute({
    getParentRoute: () => rootRoute,
    path: '/',
    component: () => <Home/>
})


// 构建路由树
const routeTree = rootRoute.addChildren([indexRoute, aboutRoute.addChildren([infoRoute])])

// 创建路由
const router = createRouter({routeTree})

export default router;