import { FunctionComponent, useEffect } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import styles from "@styles/post.module.scss";
// import "prismjs/themes/prism-dark.min.css";
// import "@styles/atom-one-dark.css";

const Post: FunctionComponent<{
	title: string;
	date: string;
	source: MDXRemoteSerializeResult;
	tags?: string[];
	updating?: boolean;
}> = ({ title, date, source, tags }) => {
	return (
		<article role="article" className={styles.post}>
			<PostHeader title={title} date={date} tags={tags} />
			<PostContent source={source} />
		</article>
	);
};

export default Post;
