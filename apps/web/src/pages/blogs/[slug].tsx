import { useRouter } from "next/router";
import type { GetStaticPaths, GetStaticProps } from "next";
import ErrorPage from "next/error";
import Head from "next/head";
import { FC } from "react";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPostBySlug, getSlugs } from "../../lib/api";
import Layout from "@components/Layout";
import Blog from "@components/Blog";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

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
			<Blog source={post.source} {...post.meta} />
		</Layout>
	);
};

const mdxOptions = {
	rehypePlugins: [
		rehypeSlug,
		[rehypeAutolinkHeadings, { behavior: "wrap" }],
		rehypeHighlight,
	],
};

type SingleBlogProps = {
	post: {
		source: MDXRemoteSerializeResult<Record<string, unknown>>;
		meta: {
			title: string;
			ogImage: {
				url: string;
			};
			date: string;
			tags?: string[];
		};
		slug: string;
	};
};

type BlogStaticPropParams = {
	slug: string;
};

export const getStaticProps: GetStaticProps<
	SingleBlogProps,
	BlogStaticPropParams
> = async ({ params }) => {
	const { slug } = params;
	const { content, meta, slug: realSlug } = await getPostBySlug(slug);
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
	const paths = getSlugs().map(slug => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
};

export default SingleBlog;
