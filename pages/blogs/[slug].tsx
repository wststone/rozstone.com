import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Container from "@components/deprecated/container";
import PostBody from "@components/deprecated/post-body";
import Header from "@components/deprecated/header";
import PostHeader from "@components/deprecated/post-header";
import Layout from "@components/deprecated/layout";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import PostTitle from "@components/deprecated/post-title";
import Head from "next/head";
import { CMS_NAME } from "../../lib/constants";
import markdownToHtml from "../../lib/markdownToHtml";
import { Post } from "@types";

type Props = {
	post: Post;
	morePosts: Post[];
	preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout preview={preview}>
			<Container>
				<Header />
				{router.isFallback ? (
					<PostTitle>Loading…</PostTitle>
				) : (
					<>
						<article className="mb-32">
							<Head>
								<title>
									{post.title} | Next.js Blog Example with{" "}
									{CMS_NAME}
								</title>
								<meta
									property="og:image"
									content={post.ogImage.url}
								/>
							</Head>
							<PostHeader
								title={post.title}
								coverImage={post.coverImage}
								date={post.date}
								author={post.author}
							/>
							<PostBody content={post.content} />
						</article>
					</>
				)}
			</Container>
		</Layout>
	);
};

export default Post;

type Params = {
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug, [
		"title",
		"date",
		"slug",
		"author",
		"content",
		"ogImage",
		"coverImage",
	]);
	const content = await markdownToHtml(post.content || "");

	return {
		props: {
			post: {
				...post,
				content,
			},
		},
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts(["slug"]);

	return {
		paths: posts.map(post => {
			return {
				params: {
					slug: post.slug,
				},
			};
		}),
		fallback: false,
	};
}
