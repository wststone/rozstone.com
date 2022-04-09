import { styled } from "@stitches/react";
import { Viewport } from "@radix-ui/react-toast";

export const VIEWPORT_PADDING = 16;

const ToastViewport = styled(Viewport, {
	position: "fixed",
	top: "10%",
	right: 0,
	display: "flex",
	flexDirection: "column",
	padding: VIEWPORT_PADDING,
	gap: 8,
	width: 160,
	maxWidth: "100vw",
	margin: 0,
	listStyle: "none",
	zIndex: 2147483647,
	// "@media (min-width: 640px)": {
	// 	width: 100,
	// },
});

export default ToastViewport;
