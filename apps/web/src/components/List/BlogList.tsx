import { FC } from "react";
import { Blog } from "@types";
import ListBlogItem from "./ListBlogItem";
import Link from "next/link";

interface BlogListsProp {
	allBlogs: Blog[];
	limit?: number;
}

export const BlogList: FC<BlogListsProp> = ({ allBlogs }) => {
	return (
		<div className="flex flex-col p-5">
			<Link href="/blogs" scroll={false}>
				<a className="ml-auto">More Blogs</a>
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
					/>
				))}
			</div>
		</div>
	);
};

export default BlogList;
