import { FunctionComponent } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import "highlight.js/styles/atom-one-dark.css";
import styles from "@styles/post.module.css";

const Post: FunctionComponent<{
	title: string;
	date: string;
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
	tags?: string[];
}> = ({ title, date, source, tags }) => {
	return (
		<div className={styles.post}>
			<PostHeader title={title} date={date} tags={tags} />
			<PostContent source={source} />
		</div>
	);
};

export default Post;
