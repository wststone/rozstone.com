import Author from "./author";


export type ParsedBlog = {
	content: string;
	meta: PostMeta;
	slug: string;
};

interface PostMeta {
	date: string;
	title: string;
	tags?: string[];
	coverImage: string;
	ogImage: {
		url: string;
	};
}


export type Post = {
	meta: {
		title: string;
		date: string;
		coverImage: string;
		author: Author;
		excerpt: string;
		ogImage: {
			url: string;
		};
	};
	slug: string;
	content: string;
};

export default Post;
