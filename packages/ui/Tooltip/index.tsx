import { FC } from "react";
import { Root, Trigger, TooltipTriggerProps } from "@radix-ui/react-tooltip";
import TooltipContent from "./TooltipContent";
import TooltipArrow from "./TooltipArrow";

interface TooltipProps extends TooltipTriggerProps {
	trigger?: JSX.Element | null;
	arrow?: boolean;
}

const Tooltip: FC<TooltipProps> = ({
	trigger,
	arrow = true,
	children,
	...props
}) => {
	return (
		<Root>
			<Trigger {...props}>{trigger}</Trigger>
			<TooltipContent>
				{arrow && <TooltipArrow />}
				{children}
			</TooltipContent>
		</Root>
	);
};

export default Tooltip;
