import { Content } from "@radix-ui/react-tooltip";
import { styled } from "@stitches/react";
import { slideDown, slideUp } from "../shared";

const TooltipContent = styled(Content, {
	backgroundColor: "white",
	borderRadius: 6,
	padding: 6,
	animationDuration: "0.6s",
	animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
	animationFillMode: "forwards",
	'&[data-side="top"]': { animationName: slideUp },
	'&[data-side="bottom"]': { animationName: slideDown },
});

export default TooltipContent;
