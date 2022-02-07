import { FunctionComponent } from "react";
import Link from "next/link";

interface ListBlogItemProps {
	slug: string;
	title: string;
	date: string;
	coverImage: string;
	excerpt: string;
	ogImage: {
		url: string;
	};
	content: string;
}

export const ListBlogItem: FunctionComponent<ListBlogItemProps> = ({
	title,
	slug,
	excerpt,
}) => {
	return (
		<Link href={`/blogs/${slug}`}>
			<a className="flex py-2 px-3 transition-colors duration-300 bg-transparent hover:bg-slate-100">
				<div className="flex flex-col">
					<div className="text-neutral-700 text-base font-[450] sm:text-xl dark:text-neutral-300">{title}</div>
					<p className="mt-1 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">{excerpt}</p>
				</div>
			</a>
		</Link>
	);
};

export default ListBlogItem;
