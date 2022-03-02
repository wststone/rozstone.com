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
		<div className="flex flex-col p-5">
			<Link href="/blogs" locale={locale} scroll={false}>
				<a className="ml-auto mb-1 text-2xl hover:text-gray-400">
					More Blogs
				</a>
			</Link>
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
		</div>
	);
};

export default BlogList;
