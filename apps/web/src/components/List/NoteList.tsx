import { FC, useCallback, useState } from "react";
import { Blog } from "@types";
import ListNoteItem from "./ListNoteItem";
import Filter from "./Filter";
import { randomItem } from "../../lib/utils";
import { Select } from "ui";
interface NoteListProp {
	allNotes: Blog[];
}

export const NoteList: FC<NoteListProp> = ({ allNotes }) => {
	const [filteredNotes, setFilteredNotes] = useState(allNotes);
	const filterNotes = useCallback((tag: string) => {
		if (!tag) {
			setFilteredNotes(allNotes);
			return;
		}
		const notes = allNotes.filter(note => note.meta.tags?.includes(tag));
		setFilteredNotes(notes);
	}, []);
	const allTags = allNotes.reduce((acc: string[], cur: Blog) => {
		const tags = cur.meta.tags || [];
		return Array.from(new Set([...acc, ...tags]));
	}, []);
	return (
		<section aria-labelledby="notes-heading" className="px-8">
			<div className="flex justify-between">
				<h2 id="notes-heading">notes</h2>
				<Select data={allTags} defaultValue={randomItem(allTags)}>
					标签筛选
				</Select>
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
		</section>
	);
};

export default NoteList;
