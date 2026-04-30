import axios, {type AxiosError} from "axios";
import {httpError} from "@/config/httpError.ts"
import {message} from "antd"

// 配置axios用于发送请求
export const useAxios = () => {
    const http = axios.create({
        baseURL: 'http://localhost:3000',
        timeout: 1000,
        headers: {'X-Custom-Header': 'foobar'}
    });

    // Add a request interceptor
    http.interceptors.request.use(function (config) {
            // Do something before request is sent
            return config;
        }, function (error) {
            // Do something with request error
            return Promise.reject(error);
        },
    );

// Add a response interceptor
    http.interceptors.response.use(function onFulfilled(response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    }, function onRejected(error: AxiosError) {
        // 响应错误处理
        const errorMessage = httpError[error.status as keyof typeof httpError]
        console.log(errorMessage)
        message.info({content: errorMessage, key: 'info'})
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
    
    return {http}
}