import {
	useState,
	useEffect,
	useRef,
	MutableRefObject,
	ReactPortal,
} from "react";
import {TableOfContent,HeadingTags} from "@types"
import { createPortal } from "react-dom";
import { CopyButton } from "@components/CodeBlock";

type MarkdownEnhancement = {
	articleRef: MutableRefObject<HTMLElement>;
	portals: ReactPortal[];
	currentSection: string;
	tableOfContents: TableOfContent[];
};

const CODE_BLOCK_SELECTOR = ".remark-highlight";
const HEADINGS_SELECTOR = "h2, h3, h4";



function useMarkdownEnhance(): MarkdownEnhancement {
	const articleRef = useRef<HTMLElement>(null);
	const [portals, setPortals] = useState<ReactPortal[]>([]);
	const [tableOfContents, setTableOfContents] = useState<TableOfContent[]>(
		[]
	);
	const [currentSection, setCurrentSection] = useState<string>();
	const observer = useRef<IntersectionObserver>(null);
	useEffect(() => {
		const codeBlocks = document.querySelectorAll(CODE_BLOCK_SELECTOR);
		const tableOfContents = document.querySelectorAll(HEADINGS_SELECTOR);
		tableOfContents.forEach(content => {
			console.log(content);
			const tag = content.tagName as HeadingTags;
			const heading = { tag, content: content.id } as TableOfContent;
			setTableOfContents(prev => [...prev, heading]);
		});
		observer.current = new IntersectionObserver(entries => {
			entries.forEach(entry => {
				if (entry.intersectionRatio > 0) {
					setCurrentSection(entry.target.getAttribute("id"));
				}
			});
		});
		codeBlocks.forEach(codeBlock => {
			const content = codeBlock.textContent;
			setPortals(prevPortals => [
				...prevPortals,
				createPortal(<CopyButton content={content} />, codeBlock),
			]);
		});
		tableOfContents.forEach(heading => {
			observer.current.observe(heading);
		});
	}, []);
	return { articleRef, portals, currentSection, tableOfContents };
}

export default useMarkdownEnhance;
