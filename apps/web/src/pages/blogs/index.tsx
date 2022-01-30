import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import { getAllPosts } from "../../lib/api";
import { FC } from "react";
import { Post } from "@types";
import BlogList from "@components/Blog/List";

interface BlogListsProps {
	allBlogs: Post[];
}

const BlogListPage: FC<BlogListsProps> = ({ allBlogs }) => {
	return (
		<Layout>
			<BlogList allBlogs={allBlogs} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allBlogs = await getAllPosts();

	return {
		props: { allBlogs },
	};
};

export default BlogListPage;
