import Container from "@components/deprecated/container";
import MoreStories from "@components/deprecated/more-stories";
import HeroPost from "@components/deprecated/hero-post";
import Intro from "@components/deprecated/intro";
// import Layout from "@components/deprecated/layout";
import { getAllPosts } from "../lib/api";
import Head from "next/head";
import { CMS_NAME } from "../lib/constants";
import { Post } from "@types";
import Layout from "@components/Layout";
import Header from "@components/Header";
import Introduction from "@components/Introduction";

type Props = {
	allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
	const heroPost = allPosts[0];
	const morePosts = allPosts.slice(1);
	return (
		<>
			<Head>
				<title>Rozstone's Blog</title>
			</Head>
			<Layout>
				<Introduction />
			</Layout>
			{/* <Container>
					<Intro />
					{heroPost && (
						<HeroPost
							title={heroPost.title}
							coverImage={heroPost.coverImage}
							date={heroPost.date}
							author={heroPost.author}
							slug={heroPost.slug}
							excerpt={heroPost.excerpt}
						/>
					)}
					{morePosts.length > 0 && <MoreStories posts={morePosts} />}
				</Container> */}
		</>
	);
};

export default Index;

export const getStaticProps = async () => {
	const allPosts = getAllPosts([
		"title",
		"date",
		"slug",
		"author",
		"coverImage",
		"excerpt",
	]);

	return {
		props: { allPosts },
	};
};
