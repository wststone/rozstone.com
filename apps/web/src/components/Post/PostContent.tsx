import { FC } from "react";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import CodePlayGround from "../CodePlayGround";

interface PostContentProps {
	source: MDXRemoteSerializeResult;
}

const PostContent: FC<PostContentProps> = ({ source }) => {
	return (
		<section role="contentinfo">
			<MDXRemote
				{...source}
				components={{
					CodePlayGround,
				}}
			/>
		</section>
	);
};

export default PostContent;
