import type { MDXRemoteSerializeResult } from "next-mdx-remote";

export type ParsedBlog = {
	content: string;
	meta: BlogMeta;
	slug: string;
};

export interface BlogMeta {
	date: string;
	title: string;
	tags?: string[];
	coverImage: string;
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
			tags?: string[];
		};
		slug: string;
	};
};

export type TableOfContent = {
	title: string;
	content: {
		title: string;
		content: {
			title: string;
		}[];
	};
};

export default Blog;
