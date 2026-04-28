import {useAxios} from "@/hooks/useAxios.tsx";
import {useQuery} from "@tanstack/react-query";

export const useGetLesson = () => {
    const {http} = useAxios()

    // 发送请求
    return useQuery({
        queryKey: ["lesson"],
        queryFn: async () => {
            return (await http.get("/posts1")).data
        }
    })
}
