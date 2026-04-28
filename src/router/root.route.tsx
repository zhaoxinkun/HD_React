// 创建整个系统的根路由
import {createRootRoute, Link} from "@tanstack/react-router";
import RootLayout from "@/layout/Rootlayout.tsx";

const rootRoute = createRootRoute({
    component: () => <RootLayout/>,
    notFoundComponent: () => { //404页面
        return (
            <div>
                <p>This is the notFoundComponent configured on root route</p>
                <Link to="/">Start Over</Link>
            </div>
        )
    },
})

export default rootRoute;