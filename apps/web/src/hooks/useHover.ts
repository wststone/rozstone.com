import {
	type MutableRefObject,
	useState,
	useCallback,
	useRef,
	useEffect,
} from "react";

function useHover<T extends HTMLElement = HTMLDivElement>(): [
	MutableRefObject<T>,
	boolean
] {
	const [value, setValue] = useState(false);
	const ref = useRef<T>(null);
	const handleMouseOver = useCallback(() => setValue(true), []);
	const handleMouseOut = useCallback(() => setValue(false), []);
	useEffect(
		() => {
			const node = ref.current;
			if (node) {
				node.addEventListener("mouseover", handleMouseOver);
				node.addEventListener("mouseout", handleMouseOut);
				return () => {
					node.removeEventListener("mouseover", handleMouseOver);
					node.removeEventListener("mouseout", handleMouseOut);
				};
			}
		},
		[ref.current] // Recall only if ref changes
	);
	return [ref, value];
}

export default useHover;
