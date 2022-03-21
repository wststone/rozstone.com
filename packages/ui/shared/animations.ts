import { keyframes } from "@stitches/react";

export const slideDown = keyframes({
	"0%": { opacity: 0, transform: "translateY(-10px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
});

export const slideUp = keyframes({
	"0%": { opacity: 0, transform: "translateY(10px)" },
	"100%": { opacity: 1, transform: "translateY(0)" },
});
