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
	<script
		type="text/javascript"
		async
		id="dark-mode-script"
		dangerouslySetInnerHTML={{ __html: DARKMODE_SCRIPT }}
	/>
);

export default DarkModeScript;
