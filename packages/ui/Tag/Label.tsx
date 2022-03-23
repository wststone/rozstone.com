import { styled } from "@stitches/react";
import { red } from "@radix-ui/colors";
import { Label, LabelProps } from "@radix-ui/react-label";

const Tag = styled(Label, {
	backgroundColor: red.red3,
	color: red.red9,
	padding: "2px 16px",
	borderRadius: 16,
	fontSize: 14,
});

export default Tag