import { FC } from "react";
import {
	Root,
	Value,
	ItemText,
	Separator,
	SelectProps as SelectRootProps,
} from "@radix-ui/react-select";
import SelectTrigger from "./SelectTrigger";
import SelectTriggerIcon from "./SelectTriggerIcon";
import SelectContent from "./SelectContent";
import SelectItem from "./SelectItem";
import SelectViewport from "./SelectViewport";
import SelectItemIndicator from "./SelectItemIndicator";
import { CheckIcon } from "@radix-ui/react-icons";

interface SelectProps extends SelectRootProps {
	options: string[];
}

const Select: FC<SelectProps> = ({ options, children, ...props }) => {
	return (
		<Root {...props}>
			<SelectTrigger>
				<Value aria-label={props.value}>{children}</Value>
				<SelectTriggerIcon />
			</SelectTrigger>
			<SelectContent>
				<SelectViewport>
					{options.map(option => (
						<SelectItem value={option} key={option}>
							<ItemText>{option}</ItemText>
							<SelectItemIndicator>
								<CheckIcon />
							</SelectItemIndicator>
						</SelectItem>
					))}
					<Separator />
				</SelectViewport>
			</SelectContent>
		</Root>
	);
};

export default Select;
