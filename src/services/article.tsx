import {useAxios} from "@/hooks/useAxios.tsx";
import {useQuery} from "@tanstack/react-query";
import type {AxiosError} from "axios";


export interface Article {
    id: string,
    title: string,
    content: string,
    views: number
}

export const useGetLesson = () => {
    const {http} = useAxios()

    // 发送请求
    return useQuery<Article[], AxiosError>({  //使用ts定义正确的返回类型以及错误的返回类型
        queryKey: ["lesson"],
        queryFn: async () => {
            return (await http.get("/posts")).data
        }
    })
}
