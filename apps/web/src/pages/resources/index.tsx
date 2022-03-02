import { FC } from "react";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { Blog } from "@types";
import Layout from "@components/Layout";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

type HomeProps = {
	allPosts: Blog[];
};

const ResourcesPage: FC<HomeProps> = ({ allPosts }) => {
	return (
		<>
			<Head>
				<title>Resources</title>
			</Head>
			<Layout>
				<h1>resouces</h1>
			</Layout>
		</>
	);
};

export const getStaticProps = async ({ locale }) => {
	const allPosts = await getAllPosts();
	const translation = await serverSideTranslations(locale);

	return {
		props: { allPosts, ...translation },
	};
};

export default ResourcesPage;
