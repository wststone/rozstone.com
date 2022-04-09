import { ItemIndicator } from "@radix-ui/react-select";
import { styled } from "@stitches/react";

const SelectItemIndicator = styled(ItemIndicator, {
	position: "absolute",
	left: 0,
	width: 24,
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
});

export default SelectItemIndicator;
