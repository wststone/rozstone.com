import { FC, useEffect, useState } from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { useDarkMode } from "@logics";

const DarkMode: FC = () => {
	const [isDark, toggleDarkMode] = useDarkMode();
	const [mounted, setMounted] = useState<boolean>(false);
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;
	return (
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
};

export default DarkMode;
