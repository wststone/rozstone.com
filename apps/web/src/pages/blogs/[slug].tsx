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
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const SingleBlog: FC<SingleBlogProps> = ({ post }) => {
	const { isFallback, locale } = useRouter();
	if (!isFallback && !post?.slug) {
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
> = async ({ params, locale }) => {
	const { slug } = params;
	const {
		content,
		meta,
		slug: realSlug,
	} = await getContentBySlug(slug, blogsDirectory);
	const mdxSource = await serialize(content, {
		//@ts-ignore
		mdxOptions,
	});
	const translation = await serverSideTranslations(locale, ["common"]);
	
	return {
		props: {
			post: {
				source: mdxSource,
				meta,
				slug: realSlug,
			},
			...translation,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async ({ locales }) => {
	const paths = locales.reduce((acc, next) => {
		return [
			...acc,
			...getSlugs(blogsDirectory).map(slug => ({
				params: { slug },
				locale: next,
			})),
		];
	}, []); //set initial value as a empty array

	return {
		paths,
		fallback: false,
	};
};

export default SingleBlog;
