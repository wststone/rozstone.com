import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import { getAllPosts } from "../../lib/api";
import { FC } from "react";
import { Blog } from "@types";
import { BlogList } from "@components/List";

interface BlogListsProps {
	allBlogs: Blog[];
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
