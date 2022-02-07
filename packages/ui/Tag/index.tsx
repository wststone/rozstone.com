import { FC, ComponentPropsWithRef } from "react";

interface TagProps extends ComponentPropsWithRef<"span"> {}

export const Tag: FC<TagProps> = ({ children, ...props }) => {
	return <span className="bg-red-50 text-red-500 px-3 py-0.5 rounded-2xl text-sm capitalize dark:bg-slate-600 dark:text-slate-50" {...props}>{children}</span>;
};

export default Tag;
