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

const ListBlogItem: FunctionComponent<ListBlogItemProps> = ({
	title,
	slug,
	excerpt,
}) => {
	return (
		<Link href={`/blogs/${slug}`}>
			<a className="flex py-2 px-3 transition-colors bg-transparent hover:bg-slate-100">
				<div className="flex flex-col">
					<div className="text-xl font-[450]">{title}</div>
					<p className="mt-1 text-slate-400">{excerpt}</p>
				</div>
			</a>
		</Link>
	);
};

export default ListBlogItem;
