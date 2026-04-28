import type {FC} from "react";
import classNames from "classnames";

const BlogItem: FC<{ className?: string, state?: boolean }> = ({className, state}) => {
    return (
        <>
            <div className={classNames(
                "rounded-lg p-3",
                className,
                {"bg-white-100": state, "bg-red-100": !state}
            )}>BlogItem
            </div>
        </>
    );
};

export default BlogItem;