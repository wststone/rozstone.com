import { useTranslation } from "next-i18next";
import Link from "next/link";
import { FC } from "react";
import { motion } from "framer-motion";
interface ContentLinkProps {
	link: string;
	locale: string;
	isCurrent?: boolean;
}

const ContentLink: FC<ContentLinkProps> = ({
	link,
	locale,
	isCurrent = false,
}) => {
	const { t } = useTranslation();

	return (
		<Link href={`/${link}`} locale={locale}>
			<motion.a
				target="_self"
				className="capitalize text-lg sm:text-xl p-0.5 text-neutral-600 dark:text-neutral-200 cursor-pointer"
				layout
			>
				{t(link)}
				{isCurrent && (
					<motion.hr className="w-full mt-0.5" layoutId="underline" />
				)}
			</motion.a>
		</Link>
	);
};

export default ContentLink;
