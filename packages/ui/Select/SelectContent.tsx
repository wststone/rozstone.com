import { Content } from "@radix-ui/react-select";
import { styled } from "@stitches/react";

const SelectContent = styled(Content, {
	overflow: "hidden",
	backgroundColor: "white",
	borderRadius: 6,
	boxShadow:
		"0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)",
});

export default SelectContent