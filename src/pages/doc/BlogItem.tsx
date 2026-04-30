import type {FC} from "react";
import classNames from "classnames";
import type {Article} from "@/services/article.tsx";
import {Avatar} from "@/components/Avatar"

const BlogItem: FC<{ className?: string, state?: boolean, article: Article }> = ({className, state, article}) => {
    return (
        <>
            <div className={classNames(
                "rounded-lg p-3",
                className,
                {"bg-white-100": state, "bg-red-100": !state},
                "overflow-hidden flex items-center gap-3 hover:bg-sky-500"
            )}>
                <Avatar seed={article.id}/>
                {article.title}
            </div>
        </>
    );
};

export default BlogItem;