import { format, parseISO } from "date-fns";
import { FC } from "react";

interface PostHeaderProps {
	title: string;
	date: string;
	tags?: string[];
}

const PostHeader: FC<PostHeaderProps> = ({ title, date, tags }) => {
	const time = parseISO(date);

	return (
		<div className="flex flex-col justify-center items-center space-y-1">
			<h1 className="text-4xl text-center py-1 font-medium dark:text-neutral-100">
				{title}
			</h1>
			<div className="flex space-x-2 flex-wrap">
				{tags
					? tags.map(tag => (
							<span
								className="bg-red-50 text-red-500 px-3 my-0.5 py-0.5 rounded-2xl text-sm capitalize dark:bg-slate-600 dark:text-slate-50"
								key={tag}
							>
								{tag}
							</span>
					  ))
					: null}
			</div>
			<time dateTime={date} className="text-sm text-neutral-500 mt-1">
				{format(time, "LLLL	d, yyyy")}
			</time>
		</div>
	);
};

export default PostHeader;
