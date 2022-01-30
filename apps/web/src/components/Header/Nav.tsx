import Link from "next/link";

interface Nav {
	link: string;
	isCurrent?: boolean;
}

const Nav = ({ link, isCurrent = false }: Nav) => {
	return (
		<Link href={`/${link}`}>
			<button className="capitalize" type="button">
				{link}
				{isCurrent && <hr className="w-full" />}
			</button>
		</Link>
	);
};

export default Nav;
