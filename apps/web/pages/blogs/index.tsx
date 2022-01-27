import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import { getAllPosts } from "../../lib/api";
import { FC } from "react";
import { Post } from "@types";
import ListBlogItem from "@components/Blog/ListBlogItem";

interface BlogListsProps {
	allBlogs: Post[];
}

const BlogLists: FC<BlogListsProps> = ({ allBlogs }) => {
	// console.log(allBlogs)
	return (
		<Layout>
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
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allBlogs = await getAllPosts();

	return {
		props: { allBlogs },
	};
};

export default BlogLists;
