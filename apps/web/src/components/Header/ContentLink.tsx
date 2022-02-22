import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
interface ContentLinkProps {
	link: string;
	isCurrent?: boolean;
}

const ContentLink: FC<ContentLinkProps> = ({ link, isCurrent = false }) => {
	return (
		<Link href={`/${link}`}>
			<motion.a
				target="_self"
				className="capitalize text-lg sm:text-xl p-0.5 text-neutral-600 dark:text-neutral-200 cursor-pointer"
				layout
			>
				{link}
				{isCurrent && (
					<motion.hr className="w-full mt-0.5" layoutId="underline" />
				)}
			</motion.a>
		</Link>
	);
};

export default ContentLink;
