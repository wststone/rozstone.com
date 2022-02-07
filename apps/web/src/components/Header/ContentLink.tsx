import Link from "next/link";
import { FC } from "react";

interface ContentLinkProps {
	link: string;
	isCurrent?: boolean;
}

const ContentLink: FC<ContentLinkProps> = ({ link, isCurrent = false }) => {
	return (
		<Link href={`/${link}`}>
			<a
				target="_self"
				className="capitalize text-lg sm:text-xl p-0.5 text-neutral-600 dark:text-neutral-200"
			>
				{link}
				{isCurrent && <hr className="w-full" />}
			</a>
		</Link>
	);
};

export default ContentLink;
