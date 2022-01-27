import Author from "./author";

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
