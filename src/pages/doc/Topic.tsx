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

const Topic = () => {
    const {isPending, isError} = useGetLesson()
    if (isPending) return <div>加载中...</div>
    if (isError) return <div>出错了..</div>
    return (
        <>
            <section className="flex items-center justify-center ">
                <Card className="w-full max-w-6xl mx-auto mt-10! bg-red-500 p-2!">
                    <CardHeader>
                        <CardTitle>我的博客</CardTitle>
                        <CardDescription>希望可以给你带来启发</CardDescription>
                    </CardHeader>

                    <CardContent>
                        {
                            Array(10).fill(null).map((_, i) => {
                                return (

                                    <BlogItem key={i} className="border-4 border-blue-400 mb-3!"></BlogItem>

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

export default Topic;