import { FC, ComponentPropsWithRef } from "react";
import { Root, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

interface TagProps extends ComponentPropsWithRef<"span"> {}

export const Dropdown: FC<TagProps> = ({ children, ...props }) => {
	return (
		<Root>
			<DropdownMenuTrigger asChild></DropdownMenuTrigger>
		</Root>
	);
};

export default Dropdown;
