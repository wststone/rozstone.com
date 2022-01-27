import { FunctionComponent } from "react";
import BlogHeader from "./BlogHeader";
import BlogContent from "./BlogContent";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import "highlight.js/styles/atom-one-dark.css";
import styles from "@styles/blog.module.css";

const Blog: FunctionComponent<{
	title: string;
	date: string;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}> = ({ title, date, source }) => {
	return (
		<div className={styles.blog}>
			<BlogHeader title={title} date={date} />
			<BlogContent source={source} />
		</div>
	);
};

export default Blog;
