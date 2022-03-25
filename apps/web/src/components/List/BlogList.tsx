import { useRouter } from "next/router";
import { FC } from "react";
import { Blog } from "@types";
import ListBlogItem from "./ListBlogItem";
import Link from "next/link";

interface BlogListsProp {
	allBlogs: Blog[];
	limit?: number;
}

export const BlogList: FC<BlogListsProp> = ({ allBlogs }) => {
	const { locale } = useRouter();
	return (
		<section aria-labelledby="blogs-heading" className="flex flex-col p-5">
			<div className="flex items-center justify-between border-l-4 border-slate-300 px-2 mb-3">
				<h2
					id="blogs-heading"
					className="ml-2 text-2xl sm:text-3xl hover:text-gray-400"
				>
					Blogs
				</h2>
				<Link href="/blogs" locale={locale} scroll={false}>
					<a className="mb-1 text-lg sm:text-xl hover:text-gray-400">
						More Blogs
					</a>
				</Link>
			</div>
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
				{allBlogs.map(blog => (
					<ListBlogItem
						key={blog.meta.title}
						title={blog.meta.title}
						slug={blog.slug}
						date={blog.meta.date}
						coverImage={blog.meta.coverImage}
						excerpt={blog.meta.excerpt}
						ogImage={blog.meta.ogImage}
						content={blog.content}
						locale={locale}
					/>
				))}
			</div>
		</section>
	);
};

export default BlogList;
