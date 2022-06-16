import { FC, ReactNode } from "react";
import { Root, Trigger } from "@radix-ui/react-hover-card";
import HoverCardArrow from "./HoverCardArrow";
import HoverCardContent from "./HoverCardContent";

interface HoverCardProps {
	trigger?: ReactNode;
	arrow?: false;
}

export const HoverCard: FC<HoverCardProps> = ({
	arrow = true,
	trigger: TriggerComponent = null,
	children,
}) => {
	return (
		<Root>
			<Trigger>{TriggerComponent}</Trigger>
			<HoverCardContent>
				{arrow && <HoverCardArrow />}
				{children}
			</HoverCardContent>
		</Root>
	);
};

export default HoverCard;
