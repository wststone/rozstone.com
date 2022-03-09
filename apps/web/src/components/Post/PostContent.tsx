import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import CodePlayGround from "../CodePlayGround";

interface PostContentProps {
	source: MDXRemoteSerializeResult;
}

const PostContent: FC<PostContentProps> = ({ source }) => {
	return (
		<article role="article">
			<MDXRemote
				{...source}
				components={{
					CodePlayGround,
				}}
			/>
		</article>
	);
};

export default PostContent;
