import { FC } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface DarkModeIconProps {
	isDark: boolean;
}

const DarkModeIcon: FC<DarkModeIconProps> = ({ isDark }) =>
	isDark ? (
		<MdOutlineLightMode className="h-6 w-6 text-neutral-200" />
	) : (
		<MdOutlineDarkMode className="h-6 w-6 text-neutral-600" />
	);

export default DarkModeIcon;
