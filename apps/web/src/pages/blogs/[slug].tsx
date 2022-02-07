import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { FC } from "react";
import {
	getContentBySlug,
	getSlugs,
	blogsDirectory,
	mdxOptions,
} from "../../lib/api";
import Layout from "@components/Layout";
import Post from "@components/Post";
import { serialize } from "next-mdx-remote/serialize";
import { SingleBlogProps } from "@types";

const SingleBlog: FC<SingleBlogProps> = ({ post }) => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout>
			<Head>
				<title>{post.meta.title} | Rozstone's Blog</title>
				<meta property="og:image" content={post.meta.ogImage.url} />
			</Head>
			<Post source={post.source} {...post.meta} />
		</Layout>
	);
};

type BlogStaticPropParams = {
	slug: string;
};

export const getStaticProps: GetStaticProps<
	SingleBlogProps,
	BlogStaticPropParams
> = async ({ params }) => {
	const { slug } = params;
	const {
		content,
		meta,
		slug: realSlug,
	} = await getContentBySlug(slug, blogsDirectory);
	const mdxSource = await serialize(content, {
		// @ts-ignore
		mdxOptions,
	});

	return {
		props: {
			post: {
				source: mdxSource,
				meta,
				slug: realSlug,
			},
		},
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	const paths = getSlugs(blogsDirectory).map(slug => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};

export default SingleBlog;
