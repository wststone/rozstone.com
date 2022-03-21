import { FC } from "react";
import { Root, Trigger } from "@radix-ui/react-tooltip";
import TooltipContent from "./TooltipContent";
import TooltipArrow from "./TooltipArrow";

interface TooltipProps {
	trigger?: JSX.Element | null;
	arrow?: false;
}

const Tooltip: FC<TooltipProps> = ({ trigger, arrow, children }) => {
	return (
		<Root>
			<Trigger>{trigger}</Trigger>
			<TooltipContent>
				{arrow && <TooltipArrow />}
				{children}
			</TooltipContent>
		</Root>
	);
};

export default Tooltip;
