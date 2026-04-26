import {useTanStackRouter} from "./hooks/useTanStackRouter.tsx";

const App = () => {

    // 使用路由的hooks
    const {AppRouterProvider} = useTanStackRouter()

    return (
        <div>
            <AppRouterProvider/>
        </div>
    );
};

export default App;