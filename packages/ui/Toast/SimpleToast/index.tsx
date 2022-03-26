import {
	type FC,
	type ForwardRefExoticComponent,
	type RefAttributes,
} from "react";
import {
	Provider,
	Description,
	ToastProps,
	Title,
} from "@radix-ui/react-toast";
import ToastViewport from "../ToastViewport";
import ToastRoot from "../ToastRoot";

interface SimpleToastProps extends ToastProps {
	title?: string;
	content: string;
}

const SimpleToast: FC<SimpleToastProps> = ({
	title,
	content,
	children,
	...props
}) => {
	return (
		<ToastViewport>
			<ToastRoot {...props}>
				{title && <Title>{title}</Title>}
				<Description>{content}</Description>
			</ToastRoot>
		</ToastViewport>
	);
};

export default SimpleToast;
