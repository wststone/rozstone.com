import { FC } from "react";
import {
	Root,
	Value,
	ItemText,
	ItemIndicator,
	Separator,
	SelectProps as SelectRootProps,
} from "@radix-ui/react-select";
import SelectTrigger from "./SelectTrigger";
import SelectTriggerIcon from "./SelectTriggerIcon";
import SelectContent from "./SelectContent";
import SelectItem from "./SelectItem";
import SelectViewport from "./SelectViewport";

interface SelectProps extends SelectRootProps {
	data: string[];
}

const Select: FC<SelectProps> = ({ data, children, ...props }) => {
	return (
		<Root {...props}>
			<SelectTrigger>
				<Value>{children}</Value>
				<SelectTriggerIcon />
			</SelectTrigger>
			<SelectContent>
				<SelectViewport>
					{data.map(d => (
						<SelectItem value={d} key={d}>
							<ItemText>{d}</ItemText>
							<ItemIndicator />
						</SelectItem>
					))}
					<Separator />
				</SelectViewport>
			</SelectContent>
		</Root>
	);
};

export default Select;
