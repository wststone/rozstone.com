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

export const ListNoteItem: FunctionComponent<ListBlogItemProps> = ({
	title,
	slug,
	excerpt,
}) => {
	return (
		<Link href={`/notes/${slug}`}>
			<a className="flex py-2 px-3 transition-colors bg-transparent hover:bg-slate-100">
				<li className="flex flex-col">
					<div className="text-base sm:text-xl font-[450]">{title}</div>
					<p className="mt-1 text-slate-400 text-sm sm:text-base">{excerpt}</p>
				</li>
			</a>
		</Link>
	);
};

export default ListNoteItem;
