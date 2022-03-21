import { useTranslation } from "next-i18next";
import { FC, useEffect, useState } from "react";
import { useDarkMode } from "@logics";
import { Tooltip } from "ui";
import DarkModeButton from "./DarkModeButton";

const DarkMode: FC = () => {
	const [isDark, toggleDarkMode] = useDarkMode();
	const [mounted, setMounted] = useState<boolean>(false);
	const { t } = useTranslation();
	useEffect(() => setMounted(true), []);
	if (!mounted) return null;
	return (
		<Tooltip trigger={<DarkModeButton isDark={isDark} />} onClick={toggleDarkMode}>
			{t(isDark ? "darkMode" : "lightMode")}
		</Tooltip>
	);
};

export default DarkMode;
