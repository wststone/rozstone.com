import { FC, useEffect } from "react";
import { TableOfContent } from "@types";
import cn from "classnames";
interface TableOfContentProps {
	tableOfContents: TableOfContent[];
	currentSection: string;
}

const TableOfContent: FC<TableOfContentProps> = ({
	tableOfContents,
	currentSection,
}) => {
	useEffect(() => {}, []);
	return (
		<aside
			role="complementary"
			className="opacity-0 fixed right-2 top-1/4 p-2 xl:opacity-100 transition-all duration-500 max-w-[15ch]"
		>
			<ol className="flex flex-col space-y-2">
				{tableOfContents.map((content, index) => (
					<li
						key={index}
						className={cn(
							currentSection === content.content
								? "text-red-400"
								: "text-neutral-600"
						)}
					>
						<a href={`#${content.content}`} className="text-sm">
							{content.content}
						</a>
					</li>
				))}
			</ol>
		</aside>
	);
};

export default TableOfContent;
