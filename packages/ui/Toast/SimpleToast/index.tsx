import { type FC } from "react";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { Description, ToastProps, Title } from "@radix-ui/react-toast";
import ToastRoot from "../ToastRoot";

interface SimpleToastProps extends ToastProps {
	title?: string;
	content: string;
	success?: boolean;
}

const SimpleToast: FC<SimpleToastProps> = ({
	title,
	content,
	success = true,
	children,
	...props
}) => {
	return (
		<ToastRoot {...props}>
			{success && <CheckCircledIcon />}
			{title && <Title>{title}</Title>}
			<Description>{content}</Description>
		</ToastRoot>
	);
};

export default SimpleToast;
