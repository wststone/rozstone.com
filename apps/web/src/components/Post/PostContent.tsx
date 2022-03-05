import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";

interface PostContentProps {
	source: MDXRemoteSerializeResult
}

const PostContent: FC<PostContentProps> = ({ source }) => {
	return (
		<article>
			<MDXRemote {...source} />
		</article>
	);
};

export default PostContent;
