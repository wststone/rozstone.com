import { FC } from "react";
import { Root, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";

interface DropDownProps {
	trigger?: JSX.Element;
}

export const Dropdown: FC<DropDownProps> = ({
	trigger,
	children,
	...props
}) => {
	return (
		<Root>
			<DropdownMenuTrigger>{trigger}</DropdownMenuTrigger>
			{children}
		</Root>
	);
};

export default Dropdown;
