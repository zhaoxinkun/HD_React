import {useTanStackRouter} from "./hooks/useTanStackRouter.tsx";
import {useTanStackQuery} from "@/hooks/useTanStackQuery.tsx";

const App = () => {

    // 使用请求hooks
    const {AppQueryProvider} = useTanStackQuery();
    // 使用路由的hooks
    const {AppRouterProvider} = useTanStackRouter()

    return (
        <>
            <AppQueryProvider>
                <AppRouterProvider/>
            </AppQueryProvider>
        </>
    );
};

export default App;