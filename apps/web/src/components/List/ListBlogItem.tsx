import { FunctionComponent } from "react";
import Link from "next/link";

interface ListBlogItemProps {
	slug: string;
	title: string;
	date: string;
	coverImage: string;
	excerpt: string;
	content: string;
	locale: string;
	tags: string[];
}

export const ListBlogItem: FunctionComponent<ListBlogItemProps> = ({
	title,
	slug,
	excerpt,
	locale,
}) => {
	return (
		<Link href={`/blogs/${slug}`} locale={locale}>
			<a className="flex py-2 px-3 transition-colors duration-300 bg-transparent hover:bg-slate-100">
				<div className="flex flex-col">
					<div className="capitalize text-neutral-700 text-base font-[450] sm:text-2xl dark:text-neutral-300">
						{title}
					</div>

					<p className="mt-1 text-sm text-neutral-600 sm:text-xl dark:text-neutral-400 line-clamp-3">
						{excerpt}
					</p>
				</div>
			</a>
		</Link>
	);
};

export default ListBlogItem;
