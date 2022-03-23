import { FC } from "react";
import { LabelProps } from "@radix-ui/react-label";
import Label from "./Label";
interface TagProps extends LabelProps {}

const Tag: FC<TagProps> = ({ children, ...props }) => {
	return <Label {...props}>{children}</Label>;
};

export default Tag;
