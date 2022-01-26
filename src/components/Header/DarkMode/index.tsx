import { FC, memo, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDarkMode } from "@logics";

const DarkMode: FC = () => {
	const [isDark, toggleDarkMode] = useDarkMode();
	return (
		<button
			type="button"
			className="focus:ring-1"
			title="Toggle Dark Mode"
			onClick={toggleDarkMode}
		>
			{isDark ? (
				<MdOutlineLightMode className="h-6 w-6 text-white" />
			) : (
				<MdOutlineDarkMode className="h-6 w-6" />
			)}
		</button>
	);
};

export default DarkMode;
