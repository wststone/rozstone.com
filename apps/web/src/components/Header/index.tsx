import { FunctionComponent } from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import ToggleDarkMode from "./DarkMode";
import I18 from "./I18";
import { useRouter } from "next/router";
import ContentLink from "./ContentLink";
import { AnimatePresence } from "framer-motion";

const ContentLinks = [
	{ link: "blogs" },
	{ link: "notes" },
	{ link: "resources" },
];

const Header: FunctionComponent = () => {
	const { asPath, locale } = useRouter();
	const [_, navName] = asPath.split("/");
	return (
		<header className="flex items-center py-5 px-3">
			<Link href="/" locale={locale}>
				<a className="rounded-full focus:ring-2 p-0.5" target="_self">
					<HiOutlineHome className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />
				</a>
			</Link>
			<AnimatePresence>
				<nav className="flex ml-auto space-x-2 items-center sm:space-x-3">
					{ContentLinks.map(nav => (
						<ContentLink
							key={nav.link}
							link={nav.link}
							locale={locale}
							isCurrent={navName === nav.link}
						/>
					))}
					<I18 />
					<a
						href="https://github.com/wststone"
						target="_blank"
						className="rounded-full focus:ring-2 p-0.5"
					>
						<FiGithub className="h-6 w-6 text-neutral-600 dark:text-neutral-200" />
					</a>
					<ToggleDarkMode />
				</nav>
			</AnimatePresence>
		</header>
	);
};

export default Header;
