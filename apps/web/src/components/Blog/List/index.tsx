import { FC } from "react";
import { Post } from "@types";
import ListBlogItem from "@components/Blog/List/ListBlogItem";

interface BlogListsProp {
	allBlogs: Post[];
}

const BlogList: FC<BlogListsProp> = ({ allBlogs }) => {
	return (
		<div className="grid grid-cols-2 gap-4">
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
	);
};

export default BlogList;
