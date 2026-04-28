// 组装完整的系统路由树
import {indexRoute, aboutRoute, aboutInfoRoute, navLive, navTopic} from "./public.routes.tsx";
import rootRoute from "./root.route.tsx";

const routerTree = rootRoute.addChildren([indexRoute, aboutRoute.addChildren([aboutInfoRoute]), navTopic, navLive])

export default routerTree