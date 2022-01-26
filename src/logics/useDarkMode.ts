import { useState, useCallback, useEffect } from "react";

export function useDarkMode(): [boolean, () => void] {
	const [isDark, setIsDark] = useState<boolean>(false);
	const toggleDarkMode = useCallback(() => {
		document.documentElement.classList.toggle("dark"); // This Works
		setIsDark(dark => {
			if (dark) {
				window.localStorage.setItem("theme", "light");
			} else {
				window.localStorage.setItem("theme", "dark");
			}
			return !dark;
		});
	}, []);
	useEffect(() => {
		if (document.documentElement.classList.contains("dark")) {
			setIsDark(true);
		}
	}, []);

	return [isDark, toggleDarkMode];
}
