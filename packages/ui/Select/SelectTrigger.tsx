import { styled } from "@stitches/react";
import { violet, mauve } from "@radix-ui/colors";
import { Trigger } from "@radix-ui/react-select";

const SelectTrigger = styled(Trigger, {
	all: "unset",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 4,
	padding: "0 1rem",
	textTransform: "capitalize",
	fontSize: 14,
	lineHeight: 1,
	height: 36,
	gap: 4,
	backgroundColor: "white",
	color: violet.violet11,
	"&:hover": { backgroundColor: mauve.mauve3 },
});

export default SelectTrigger;
