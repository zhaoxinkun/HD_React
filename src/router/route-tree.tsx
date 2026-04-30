// 组装完整的系统路由树
import {indexRoute, aboutRoute, aboutInfoRoute, navLive, navArticle} from "./public.routes.tsx";
import rootRoute from "./root.route.tsx";

const routerTree = rootRoute.addChildren([indexRoute, aboutRoute.addChildren([aboutInfoRoute]), navArticle, navLive])

export default routerTree