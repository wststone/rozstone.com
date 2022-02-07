import { FC } from "react";
import { getAllPosts, notesDirectory, blogsDirectory } from "../lib/api";
import Head from "next/head";
import { Blog } from "@types";
import Layout from "@components/Layout";
import Introduction from "@components/Introduction";
import { BlogList, NoteList } from "@components/List";

type HomeProps = {
	allBlogs: Blog[];
	allNotes: Blog[];
};

const Home: FC<HomeProps> = ({ allBlogs, allNotes }) => {
	return (
		<>
			<Head>
				<title>Rozstone's Blog | Home</title>
			</Head>
			<Layout>
				<Introduction />
				<BlogList allBlogs={allBlogs} />
				<NoteList allNotes={allNotes} />
			</Layout>
		</>
	);
};

export const getStaticProps = async () => {
	const [allBlogs, allNotes] = await Promise.all([
		getAllPosts(blogsDirectory),
		getAllPosts(notesDirectory),
	]);

	return {
		props: { allBlogs, allNotes },
	};
};

export default Home;
