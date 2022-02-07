import Script from "next/script";

const DARKMODE_SCRIPT = `(function () {
	if (
		localStorage.theme === "dark" ||
		(!("theme" in localStorage) &&
			window.matchMedia("(prefers-color-scheme: dark)").matches)
	) {
		document.documentElement.classList.add("dark");
	} else {
		document.documentElement.classList.remove("dark");
	}
})()`;

export const DarkModeScript = () => (
	<Script
		id="dark-mode-script"
		strategy="beforeInteractive"
		dangerouslySetInnerHTML={{ __html: DARKMODE_SCRIPT }}
	></Script>
);

export default DarkModeScript;
