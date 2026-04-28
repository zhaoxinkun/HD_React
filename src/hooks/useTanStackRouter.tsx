import {RouterProvider} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import router from "@/router" //这里传递的是路由实例

export const useTanStackRouter = () => {
    const AppRouterProvider = () => {
        return (
            <>
                {/*这里是注册路由以及路由工具的*/}
                <RouterProvider router={router}/>
                <TanStackRouterDevtools router={router}/>
            </>
        )
    }


    return {AppRouterProvider}
}