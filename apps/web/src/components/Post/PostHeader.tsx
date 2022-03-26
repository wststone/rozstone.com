import { format, parseISO } from "date-fns";
import { FC } from "react";
import { Tag } from "ui";
interface PostHeaderProps {
	title: string;
	date: string;
	tags?: string[];
}

const PostHeader: FC<PostHeaderProps> = ({ title, date, tags }) => {
	const time = parseISO(date);

	return (
		<section
			role="heading"
			aria-labelledby="post-header"
			className="flex flex-col justify-center items-center space-y-1"
		>
			<h1
				id="post-header"
				className="text-4xl capitalize text-center py-1 font-medium dark:text-neutral-100"
			>
				{title}
			</h1>
			{tags ? (
				<div className="flex space-x-2 flex-wrap">
					{tags.map(tag => (
						<Tag
							// className="bg-red-50 text-red-500 px-3 my-0.5 py-0.5 rounded-2xl text-sm capitalize dark:bg-slate-600 dark:text-slate-50"
							key={tag}
						>
							{tag}
						</Tag>
					))}
				</div>
			) : null}
			<time dateTime={date} className="text-sm text-neutral-500 mt-1">
				{format(time, "LLLL	d, yyyy")}
			</time>
		</section>
	);
};

export default PostHeader;
