import { FC } from "react";
import {
	Root,
	Value,
	ScrollUpButton,
	Group,
	ItemText,
	ItemIndicator,
	Label,
	Separator,
	SelectProps as SelectRootProps,
	ScrollDownButton,
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
				{/* <ScrollUpButton /> */}
				<SelectViewport>
					{data.map(d => (
						<SelectItem value={d} key={d}>
							<ItemText>{d}</ItemText>
							<ItemIndicator />
						</SelectItem>
					))}

					<Group>
						<Label />
						<SelectItem value={"测试3"}>
							<ItemText>测试3</ItemText>
							<ItemIndicator />
						</SelectItem>
					</Group>
					<Separator />
				</SelectViewport>
				{/* <ScrollDownButton /> */}
			</SelectContent>
		</Root>
	);
};

export default Select;
