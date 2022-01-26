import { FunctionComponent } from "react";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import { Post } from "@types";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import "highlight.js/styles/atom-one-dark.css";


const Blog: FunctionComponent<{
	title: string;
	date: string;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}> = ({ title, date, source }) => {
	return (
		<div>
			<BlogHeader title={title} date={date} />
			<BlogContent source={source} />
		</div>
	);
};

export default Blog;
