import { FunctionComponent } from "react";
import Link from "next/link";
import { HiOutlineHome } from "react-icons/hi";
// import ToggleDarkMode from "./DarkMode";
import dynamic from 'next/dynamic'

const ToggleDarkMode = dynamic(
  () => import('./DarkMode'),
  { ssr: false }
)
const Header: FunctionComponent = () => {
	return (
		<header className="flex p-3 items-center">
			<Link href="/">
				<a className="p-1">
					<HiOutlineHome className="h-6 w-6 hover:text-neutral-400 hover:scale-103 transition-all" />
				</a>
			</Link>
			<nav className="flex ml-auto space-x-2 items-center">
				<Link href="/blogs">
					<button type="button">Blogs</button>
				</Link>
				<Link href="/todos">
					<button type="button">Todos</button>
				</Link>
				<ToggleDarkMode />
			</nav>
		</header>
	);
};

export default Header;
