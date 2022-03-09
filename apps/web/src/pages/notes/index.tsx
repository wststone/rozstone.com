import { FC } from "react";
import { getAllPosts, notesDirectory } from "../../lib/api";
import Head from "next/head";
import { Blog } from "@types";
import Layout from "@components/Layout";
import { NoteList } from "@components/List";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
	const allPosts = await getAllPosts(notesDirectory);
	const translation = await serverSideTranslations(locale, ["common"]);
	
	return {
		props: { allPosts, ...translation },
	};
};

export default NoteListPage;
