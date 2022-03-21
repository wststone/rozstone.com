import { FC } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

interface DarkModeButtonProps {
	toggleDarkMode: () => void;
	isDark: boolean;
}

const DarkModeButton: FC<DarkModeButtonProps> = ({
	toggleDarkMode,
	isDark,
}) => (
	<button
		type="button"
		className="rounded-full focus:ring-2 p-0.5"
		onClick={toggleDarkMode}
	>
		{isDark ? (
			<MdOutlineLightMode className="h-6 w-6 text-neutral-200" />
		) : (
			<MdOutlineDarkMode className="h-6 w-6 text-neutral-600" />
		)}
	</button>
);

export default DarkModeButton