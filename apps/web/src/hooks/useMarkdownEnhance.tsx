import {
	useState,
	useEffect,
	useRef,
	MutableRefObject,
	ReactPortal,
} from "react";
import { createPortal } from "react-dom";
import { CopyButton } from "@components/CodeBlock";

function useMarkdownEnhance(): [MutableRefObject<HTMLElement>, ReactPortal[]] {
	const articleRef = useRef<HTMLElement>(null);
	const [portal, setPortal] = useState<ReactPortal[]>([]);
	useEffect(() => {
		const codeBlocks = document.querySelectorAll(".remark-highlight");
		codeBlocks.forEach(codeBlock => {
			const content = codeBlock.textContent
			setPortal(prevPortals => [
				...prevPortals,
				createPortal(<CopyButton content={content} />, codeBlock),
			]);
		});
	}, []);
	return [articleRef, portal];
}

export default useMarkdownEnhance;
