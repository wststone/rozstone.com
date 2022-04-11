import { useEffect } from "react";

const TableOfContent = ({ tableOfContents }) => {
	useEffect(() => {}, []);
	return (
		<aside className="opacity-0 fixed flex flex-col space-y-2 right-10 top-20 bg-slate-200 p-2 w-[20%] lg:opacity-100 transition-all duration-500">
			<ul>
				{tableOfContents.map((content, index) => (
					<li key={index}>
						<a href={`#${content}`} className="text-sm">
							{content.content}
						</a>
					</li>
				))}
			</ul>
		</aside>
	);
};

export default TableOfContent;
