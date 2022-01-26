import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Head from "next/head";
import { FC } from "react";
import Layout from "@components/Layout";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { getPostBySlug, getSlugs } from "../../lib/api";
import { CMS_NAME } from "../../lib/constants";
import { Post } from "@types";
import Blog from "@components/Blog";
import { serialize } from "next-mdx-remote/serialize";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeHighlight from "rehype-highlight";

type Props = {
	post: {
		source: MDXRemoteSerializeResult<Record<string, unknown>>;
		meta: {
			title: string;
			ogImage: {
				url: string;
			};
			date: string;
		};
		slug: string;
	};
	preview?: boolean;
};

const Post: FC<Props> = ({ post, preview }) => {
	const router = useRouter();
	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	return (
		<Layout>
			<Head>
				<title>
					{post.meta.title} | Next.js Blog Example with {CMS_NAME}
				</title>
				<meta property="og:image" content={post.meta.ogImage.url} />
			</Head>
			<Blog
				title={post.meta.title}
				date={post.meta.date}
				source={post.source}
			/>
		</Layout>
	);
};

export default Post;

type Params = {
	params: {
		slug: string;
	};
};

const mdxOptions = {
	rehypePlugins: [
		rehypeSlug,
		[rehypeAutolinkHeadings, { behavior: "wrap" }],
		rehypeHighlight,
	],
};

export async function getStaticProps({ params }: Params) {
	const { slug } = params;
	const { content, meta, slug: realSlug } = await getPostBySlug(slug);
	const mdxSource = await serialize(content, {
		//@ts-ignore
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
}

export async function getStaticPaths() {
	const paths = getSlugs().map(slug => ({ params: { slug } }));

	return {
		paths,
		fallback: false,
	};
}
