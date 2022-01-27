import { FC, ComponentPropsWithRef } from "react";

interface TagProps extends ComponentPropsWithRef<"span"> {}

export const Tag: FC<TagProps> = ({ children, ...props }) => {
	return <span className="text-red-500" {...props}>{children}</span>;
};

export default Tag;
