import { FC } from "react";
import Head from "next/head";

interface PostMetaProps {
	title: string;
	excerpt: string;
	tags: string[];
}

const PostMeta: FC<PostMetaProps> = ({ title, excerpt,children }) => {
	return (
		<Head>
			<title>{title}</title>
			<meta property="og:title" content={title} />
			<meta property="og:description" content={excerpt} />
			{/* <meta property="og:url" content={asPath} /> */}
            {children}
		</Head>
	);
};

export default PostMeta;
