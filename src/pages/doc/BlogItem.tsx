import type {FC} from "react";
import classNames from "classnames";
import type {Article} from "@/services/article.tsx";

const BlogItem: FC<{ className?: string, state?: boolean, article: Article }> = ({className, state, article}) => {
    return (
        <>
            <div className={classNames(
                "rounded-lg p-3",
                className,
                {"bg-white-100": state, "bg-red-100": !state}
            )}>
                {article.title}
            </div>
        </>
    );
};

export default BlogItem;