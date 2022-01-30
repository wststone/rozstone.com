import { FC } from "react";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { Post } from "@types";
import Layout from "@components/Layout";
import Introduction from "@components/Introduction";
import DarkModeScript from "@components/Script/DarkModeScript";
import BlogList from "@components/Blog/List";

type HomeProps = {
	allPosts: Post[];
};

const Home: FC<HomeProps> = ({ allPosts }) => {
	return (
		<>
			<Head>
				<title>Rozstone's Blog</title>
			</Head>
			<Layout>
				<BlogList allBlogs={allPosts} />
				<DarkModeScript />
				<Introduction />
			</Layout>
		</>
	);
};

export const getStaticProps = async () => {
	const allPosts = await getAllPosts();

	// console.log(allPosts)
	return {
		props: { allPosts },
	};
};

export default Home;
