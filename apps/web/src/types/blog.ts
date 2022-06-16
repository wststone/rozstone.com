import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type ParsedBlog = {
	content: string;
	meta: BlogMeta;
	slug: string;
};

export interface BlogMeta {
	date: string;
	title: string;
	tags: string[];
	excerpt: string;
	updating?: boolean;
}

export type Blog = {
	meta: BlogMeta;
	slug: string;
	content: string;
};

export type SingleBlogProps = {
	post: {
		source: MDXRemoteSerializeResult;
		meta: {
			title: string;
			excerpt: string;
			date: string;
			tags: string[];
		};
		slug: string;
	};
};

export type TableOfContent = {
	tag: HeadingTags;
	content: string;
};

export type HeadingTags = "H2" | "H3" | "H4";

export default Blog;
