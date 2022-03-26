import { styled, keyframes } from "@stitches/react";
import { violet, blackA, mauve, slate, green } from "@radix-ui/colors";
import { Provider } from "@radix-ui/react-toast";

const VIEWPORT_PADDING = 25;

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

const Toast = () => {
	return (
		<Provider swipeDirection="right">
			{/* <Toast open={open} onOpenChange={setOpen}></Toast> */}
		</Provider>
	);
};

export default Toast;
export { default as SimpleToast } from "./SimpleToast";
export { Provider as ToastProvider };
export { default as ToastViewport } from "./ToastViewport";
