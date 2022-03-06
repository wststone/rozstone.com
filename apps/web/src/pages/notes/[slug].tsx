import Layout from "@components/Layout";
import ErrorPage from "next/error";
import { GetStaticPaths, GetStaticProps } from "next";
import {
	getContentBySlug,
	getSlugs,
	notesDirectory,
	mdxOptions,
} from "../../lib/api";
import Post from "@components/Post";
import { useRouter } from "next/router";
import type { SingleBlogProps } from "@types";
import { FC } from "react";
import Head from "next/head";
import { serialize } from "next-mdx-remote/serialize";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Notes: FC<SingleBlogProps> = ({ post }) => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout>
			<Head>
				<title>{post.meta.title} | Rozstone's Notes</title>
				<meta property="og:image" content={post.meta.ogImage.url} />
			</Head>
			<Post source={post.source} {...post.meta} />
		</Layout>
	);
};

export const getStaticProps: GetStaticProps<
	SingleBlogProps,
	{ slug: string }
> = async ({ params, locale }) => {
	const { slug } = params;
	const {
		content,
		meta,
		slug: realSlug,
	} = await getContentBySlug(slug, notesDirectory);
	const mdxSource = await serialize(content, {
		// @ts-ignore
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
			...getSlugs(notesDirectory).map(slug => ({
				params: { slug },
				locale: next,
			})),
		];
	}, []);

	return {
		paths,
		fallback: false,
	};
};

export default Notes;
