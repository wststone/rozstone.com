import { styled } from "@stitches/react";
import { violet, blackA, mauve } from "@radix-ui/colors";
import { Trigger } from "@radix-ui/react-select";

const SelectTrigger = styled(Trigger, {
	all: "unset",
	display: "inline-flex",
	alignItems: "center",
	justifyContent: "center",
	borderRadius: 4,
	padding: "0 15px",
	fontSize: 13,
	lineHeight: 1,
	height: 35,
	gap: 5,
	backgroundColor: "white",
	color: violet.violet11,
	boxShadow: `0 2px 10px ${blackA.blackA7}`,
	"&:hover": { backgroundColor: mauve.mauve3 },
	"&:focus": { boxShadow: `0 0 0 2px black` },
});

export default SelectTrigger;