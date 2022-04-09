import { FC } from "react";
import Image from "next/image";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import CodePlayGround from "../CodePlayGround";
import ImageGroup from "../Layout/ImageGroup";

interface PostContentProps {
	source: MDXRemoteSerializeResult;
}

const PostContent: FC<PostContentProps> = ({ source }) => {
	// console.log(source)
	return (
		<section role="contentinfo">
			<MDXRemote
				{...source}
				components={{
					CodePlayGround,
					Image,
					ImageGroup,
				}}
			/>
		</section>
	);
};

export default PostContent;
