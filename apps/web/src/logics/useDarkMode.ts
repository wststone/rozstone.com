import { useState, useCallback, useEffect } from "react";

export function useDarkMode(): [boolean, () => void] {
	const [isDark, setIsDark] = useState<boolean>(false);
	const toggleDarkMode = useCallback(() => setIsDark(dark => !dark), []);
	useEffect(() => {
		document.documentElement.classList.toggle("dark");
		if (isDark) {
			window.localStorage.setItem("theme", "light");
		} else {
			window.localStorage.setItem("theme", "dark");
		}
	}, [isDark]);

	return [isDark, toggleDarkMode];
}
