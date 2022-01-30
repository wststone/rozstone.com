import { FunctionComponent } from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
import ToggleDarkMode from "./DarkMode";
import { useRouter } from "next/router";
import Nav from "./Nav";

const navs = [{ link: "blogs" }, { link: "todos" }];

const Header: FunctionComponent = () => {
	const { asPath } = useRouter();
	const [_, navName] = asPath.split("/");

	return (
		<header className="flex p-3 items-center">
			<Link href="/">
				<a className="p-1">
					<HiOutlineHome className="h-6 w-6 hover:text-neutral-400 hover:scale-103 transition-all" />
				</a>
			</Link>
			<nav className="flex ml-auto space-x-2 items-center">
				{navs.map(nav => (
					<Nav
						key={nav.link}
						link={nav.link}
						isCurrent={navName === nav.link}
					/>
				))}
				<ToggleDarkMode />
			</nav>
		</header>
	);
};

export default Header;
