import { useState, useCallback, useEffect, useRef } from "react";

export function useDarkMode(): [boolean, () => void] {
	const [isDark, setIsDark] = useState<boolean>(() =>
		typeof window !== "undefined"
			? window.localStorage.theme === "dark"
			: undefined
	);
	const toggleDarkMode = useCallback(() => setIsDark(dark => !dark), []);
	useEffect(() => {
		if (isDark) {
			window.localStorage.setItem("theme", "dark");
			document.documentElement.classList.add("dark");
		} else {
			window.localStorage.setItem("theme", "light");
			document.documentElement.classList.remove("dark");
		}
	}, [isDark]);

	return [isDark, toggleDarkMode];
}
