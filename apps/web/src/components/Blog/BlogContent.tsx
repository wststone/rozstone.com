import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface BlogContentProps {
	source: MDXRemoteSerializeResult<Record<string, unknown>>;
}

const BlogContent: FC<BlogContentProps> = ({ source }) => {
	return (
		<article>
			<MDXRemote {...source} />
		</article>
	);
};

export default BlogContent;
