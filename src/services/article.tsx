import {useAxios} from "@/hooks/useAxios.tsx";
import {useQuery} from "@tanstack/react-query";
import type {AxiosError} from "axios";

// 创建接口,用于定义请求拿到数据的提示
export interface Article {
    id: string,
    title: string,
    content: string,
    views: number
}

// Lesson请求
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
