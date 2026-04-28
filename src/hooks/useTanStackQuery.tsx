/***
 * @description 封装一个请求工具的使用hooks
 * @prop children 插槽
 * */
import type {FC, ReactNode} from "react";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

// Create a client
const queryClient = new QueryClient()
export const useTanStackQuery = () => {

    const AppQueryProvider: FC<{ children: ReactNode }> = ({children}) => {
        return <QueryClientProvider client={queryClient}>
            {/* The rest of your application */}
            <ReactQueryDevtools initialIsOpen={true}/>
            {children}
        </QueryClientProvider>

    }


    return {AppQueryProvider}
}