import { FC, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";

export function toggle() {
	document.documentElement.classList.toggle("dark");
}

const DarkMode: FC = () => {
	const [isDark, setIsDark] = useState(() =>
		document.documentElement.classList.contains("dark")
	);
	const toggleDarkMode = () => {
		toggle();
		setIsDark(dark => !dark);
	};
	return (
		<button type="button" className="" title="Toggle Dark Mode" onClick={toggleDarkMode}>
			{isDark ? (
				<MdOutlineLightMode className="h-6 w-6 text-white" />
			) : (
				<MdOutlineDarkMode className="h-6 w-6" />
			)}
		</button>
	);
};

export default DarkMode;
