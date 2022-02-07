import { FC } from "react";
import { getAllPosts } from "../../lib/api";
import Head from "next/head";
import { Blog } from "@types";
import Layout from "@components/Layout";
import { BlogList } from "@components/List";

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

export const getStaticProps = async () => {
	const allPosts = await getAllPosts();

	return {
		props: { allPosts },
	};
};

export default ResourcesPage;
