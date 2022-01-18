import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import { getAllPosts } from "../../lib/api";
import { FC } from "react";
import { Post } from "@types";
import Blog from "@components/Blog";

interface BlogListsProps {
	allBlogs: Post[];
}

const BlogLists: FC<BlogListsProps> = ({ allBlogs }) => {
	return (
		<Layout>
			<div className="grid grid-cols-2 gap-4">
				{allBlogs.map(blog => (
					<Blog
						key={blog.title}
						title={blog.title}
						slug={blog.slug}
						date={blog.date}
						coverImage={blog.coverImage}
						author={blog.author}
						excerpt={blog.excerpt}
						ogImage={blog.ogImage}
						content={blog.content}
					/>
				))}
			</div>
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allBlogs = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"excerpt",
	]);

	return {
		props: { allBlogs },
	};
};

export default BlogLists;
