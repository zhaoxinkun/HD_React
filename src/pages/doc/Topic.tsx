import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export const Topic = () => {
    return (
        <>
            <section className="flex items-center justify-center ">
                <Card className="w-full max-w-6xl mx-auto m-1">
                    <CardHeader>
                        <CardTitle>我的博客</CardTitle>
                        <CardDescription>希望可以给你带来启发</CardDescription>
                    </CardHeader>

                    <CardContent>
                        {
                            Array(10).fill(null).map((_, i) => {
                                return <div>{i}</div>
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