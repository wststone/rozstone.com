import { IoLanguage } from "react-icons/io5";

const LanguageButton = () => {
	return (
		<button type="button" className="rounded-full p-1">
			<IoLanguage className="text-neutral-600 dark:text-neutral-200 h-6 w-6" />
		</button>
	);
};

export default LanguageButton