import E404 from "@/components/error/E404.tsx";
import type {FC} from "react";
import type {AxiosError} from "axios";
import E403 from "@/components/error/E403.tsx";


// 依据不同的axios的错误状态码返回不同的组件
const Index: FC<{ error: AxiosError }> = ({error}) => {

    switch (error.status) {
        case 403:
            return <E403/>
        case 404:
            return <E404/>
    }
};

export default Index;