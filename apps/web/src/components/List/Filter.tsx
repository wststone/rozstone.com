import { FC, memo, useCallback, useState, ChangeEvent } from "react";

interface FilterProps {
	filterNotes: (tag: string) => void;
}

const Filter: FC<FilterProps> = memo(({ filterNotes }) => {
	const [keyword, setKeyword] = useState("");
	const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
		setKeyword(e.target.value);
		filterNotes(e.target.value);
	}, []);
	return <input type="search" onChange={onChange} value={keyword} className="p-2" />;
});

export default Filter;
