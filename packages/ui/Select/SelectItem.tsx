import { mauve, violet } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import { Item } from "@radix-ui/react-select";

const SelectItem = styled(Item, {
	all: "unset",
	fontSize: 14,
	lineHeight: 1,
	color: violet.violet11,
	borderRadius: 4,
	display: "flex",
	alignItems: "center",
	height: 24,
	padding: "0 36px 0 24px",
	position: "relative",
	userSelect: "none",

	"&[data-disabled]": {
		color: mauve.mauve8,
		pointerEvents: "none",
	},

	"&:focus": {
		backgroundColor: violet.violet9,
		color: violet.violet1,
	},
});

export default SelectItem;
