import { Root } from "@radix-ui/react-toast";
import { VIEWPORT_PADDING } from "./ToastViewport";
import { styled, keyframes } from "@stitches/react";
import { green } from "@radix-ui/colors";

const hide = keyframes({
	"0%": { opacity: 1 },
	"100%": { opacity: 0 },
});

const slideIn = keyframes({
	from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
	to: { transform: "translateX(0)" },
});

const swipeOut = keyframes({
	from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
	to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
});

const ToastRoot = styled(Root, {
	backgroundColor: "white",
	borderRadius: 6,
	boxShadow:
		"hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
	padding: 15,
	display: "flex",
	alignItems: "center",
	borderLeft: 4,
	borderLeftStyle: "solid",
	borderLeftColor: green.green10,
	"@media (prefers-reduced-motion: no-preference)": {
		'&[data-state="open"]': {
			animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
		},
		'&[data-state="closed"]': {
			animation: `${hide} 100ms ease-in forwards`,
		},
		'&[data-swipe="move"]': {
			transform: "translateX(var(--radix-toast-swipe-move-x))",
		},
		'&[data-swipe="cancel"]': {
			transform: "translateX(0)",
			transition: "transform 200ms ease-out",
		},
		'&[data-swipe="end"]': {
			animation: `${swipeOut} 100ms ease-out forwards`,
		},
	},
});

export default ToastRoot;
