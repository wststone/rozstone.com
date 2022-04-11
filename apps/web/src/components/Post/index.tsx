import { FunctionComponent } from "react";
import PostHeader from "./PostHeader";
import PostContent from "./PostContent";
import TableOfContent from "../TableOfContent";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";
import { useMarkdownEnhance } from "@hooks";
import styles from "@styles/post.module.scss";

const Post: FunctionComponent<{
	title: string;
	date: string;
	source: MDXRemoteSerializeResult;
	tags?: string[];
	updating?: boolean;
}> = ({ title, date, source, tags }) => {
	const { articleRef, portals, currentSection, tableOfContents } =
		useMarkdownEnhance();
	console.log(currentSection, tableOfContents);
	return (
		<article
			ref={articleRef}
			id="article"
			role="article"
			className={styles.post}
		>
			<PostHeader title={title} date={date} tags={tags} />
			<PostContent source={source} />
			<TableOfContent tableOfContents={tableOfContents}/>
			{portals}
		</article>
	);
};

export default Post;
