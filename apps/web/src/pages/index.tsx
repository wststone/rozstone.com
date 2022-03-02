import { FC } from "react";
import { getAllPosts, notesDirectory, blogsDirectory } from "../lib/api";
import Head from "next/head";
import { Blog, Locale } from "@types";
import Layout from "@components/Layout";
import Introduction from "@components/Introduction";
import { BlogList, NoteList } from "@components/List";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getStaticProps = async ({ locale }: { locale: Locale }) => {
	const [allBlogs, allNotes] = await Promise.all([
		getAllPosts(blogsDirectory),
		getAllPosts(notesDirectory),
	]);
	const translation = await serverSideTranslations(locale);

	return {
		props: { allBlogs, allNotes, ...translation },
	};
};

export default Home;
