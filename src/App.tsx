import {useTanStackRouter} from "./hooks/useTanStackRouter.tsx";

const App = () => {

    // 使用路由的hooks
    const {AppRouterProvider} = useTanStackRouter()

    return (
        <>
            <AppRouterProvider/>
        </>
    );
};

export default App;