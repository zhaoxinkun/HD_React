import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import BlogItem from "@/pages/doc/BlogItem.tsx";
import {useGetLesson} from "@/services/article.tsx";
import Error from "@/components/error";

const Article = () => {
    // 发送请求
    const {isPending, isError, error, data} = useGetLesson()
    // 加载处理
    if (isPending) return <div>加载中...</div>
    // 错误处理
    if (isError) return <Error error={error}/>
    // console.log(data[0])
    return (
        <>
            <section className="flex items-center justify-center ">
                <Card className="w-full max-w-6xl mx-auto mt-10!  p-2!">
                    <CardHeader>
                        <CardTitle>我的博客</CardTitle>
                        <CardDescription>希望可以给你带来启发</CardDescription>
                    </CardHeader>

                    <CardContent>
                        {
                            data.map((article) => {
                                return (

                                    <BlogItem key={article.id} article={article}
                                              className="border-4 border-blue-400 mb-3!"></BlogItem>

                                )
                            })
                        }
                    </CardContent>
                    <CardFooter>
                    </CardFooter>
                </Card>
            </section>
        </>
    );
};

export default Article;