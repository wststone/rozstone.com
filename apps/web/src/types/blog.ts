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
	ogImage: {
		url: string;
	};
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
			ogImage: {
				url: string;
			};
			date: string;
			tags?: string[];
		};
		slug: string;
	};
};

export default Blog;
