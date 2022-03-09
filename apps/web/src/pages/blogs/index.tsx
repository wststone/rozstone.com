import { GetStaticProps } from "next";
import Layout from "@components/Layout";
import { getAllPosts } from "../../lib/api";
import { FC } from "react";
import { Blog } from "@types";
import { BlogList } from "@components/List";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const allBlogs = await getAllPosts();
	const translation = await serverSideTranslations(locale, ["common"]);

	return {
		props: { allBlogs, ...translation },
	};
};

export default BlogListPage;
