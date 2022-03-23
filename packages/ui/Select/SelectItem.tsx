import { mauve, violet } from "@radix-ui/colors";
import { styled } from "@stitches/react";
import { Item } from "@radix-ui/react-select";

const SelectItem = styled(Item, {
	all: "unset",
	fontSize: 13,
	lineHeight: 1,
	color: violet.violet11,
	borderRadius: 3,
	display: "flex",
	alignItems: "center",
	height: 25,
	padding: "0 35px 0 25px",
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
