import { FC } from "react";
import { getAllPosts, notesDirectory } from "../../lib/api";
import Head from "next/head";
import { Blog } from "@types";
import Layout from "@components/Layout";
import { NoteList } from "@components/List";
import { GetStaticProps } from "next";

type HomeProps = {
	allPosts: Blog[];
};

const NoteListPage: FC<HomeProps> = ({ allPosts }) => {
	return (
		<>
			<Head>
				<title>Rozstone's Blog | Notes</title>
			</Head>
			<Layout>
				<NoteList allNotes={allPosts} />
			</Layout>
		</>
	);
};

export const getStaticProps: GetStaticProps = async () => {
	const allPosts = await getAllPosts(notesDirectory);

	return {
		props: { allPosts },
	};
};

export default NoteListPage;
