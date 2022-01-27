import { format, parseISO } from "date-fns";
import { FC } from "react";

interface BlogHeaderProps {
	title: string;
	date: string;
	tags?: string[];
}

const BlogHeader: FC<BlogHeaderProps> = ({ title, date, tags }) => {
	const time = parseISO(date);
	return (
		<div className="flex flex-col justify-center items-center">
			<h1 className="text-4xl text-center py-1 font-medium">{title}</h1>
			<time dateTime={date} className="text-sm text-neutral-500 mt-1">
				{format(time, "LLLL	d, yyyy")}
			</time>
		</div>
	);
};

export default BlogHeader;
