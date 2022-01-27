import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { Post } from "@types";
import Layout from "@components/Layout";
import Header from "@components/Header";
import Introduction from "@components/Introduction";
import Script from "next/script";
import DarkModeScript from "@components/Script/DarkModeScript";

type Props = {
	allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
	return (
		<>
			<Head>
				<title>Rozstone's Blog</title>
			</Head>
			<Layout>
				<DarkModeScript />
				<Introduction />
			</Layout>
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = await getAllPosts();

	// console.log(allPosts)
	return {
		props: { allPosts },
	};
};
