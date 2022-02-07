import { FC, useCallback, useState } from "react";
import { Blog } from "@types";
import ListNoteItem from "./ListNoteItem";
import Filter from "./Filter";

interface NoteListProp {
	allNotes: Blog[];
}

export const NoteList: FC<NoteListProp> = ({ allNotes }) => {
	const [filteredNotes, setFilteredNotes] = useState(allNotes);
	const filterNotes = useCallback((tag: string) => {
		const notes = allNotes.filter(note => note.meta.tags?.includes(tag))
		setFilteredNotes(notes)
	}, [])

	return (
		<div className="px-8">
			<div className="flex justify-between">
				<h3>{`123${filteredNotes.length}`}</h3>
				<Filter filterNotes={filterNotes}/>
			</div>
			<ol className="grid grid-cols-1 gap-4 sm:grid-cols-3">
				{filteredNotes.map(blog => (
					<ListNoteItem
						key={blog.meta.title}
						title={blog.meta.title}
						slug={blog.slug}
						date={blog.meta.date}
						coverImage={blog.meta.coverImage}
						excerpt={blog.meta.excerpt}
						ogImage={blog.meta.ogImage}
						content={blog.content}
					/>
				))}
			</ol>
		</div>
	);
};

export default NoteList;
