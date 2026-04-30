import {RouterProvider} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import router from "@/router" //这里传递的是路由实例

export const useTanStackRouter = () => {
    const AppRouterProvider = () => {
        return (
            <>
                {/*注册路由*/}
                <RouterProvider router={router}/>
                {/*路由工具*/}
                <TanStackRouterDevtools router={router}/>
            </>
        )
    }


    return {AppRouterProvider}
}