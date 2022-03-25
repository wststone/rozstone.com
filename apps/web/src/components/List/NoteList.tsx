import { FC, useCallback, useMemo, useState } from "react";
import { Blog } from "@types";
import ListNoteItem from "./ListNoteItem";
import { randomItem } from "../../lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { Select } from "ui";
interface NoteListProp {
	allNotes: Blog[];
}

export const NoteList: FC<NoteListProp> = ({ allNotes }) => {
	const allTags = allNotes.reduce((acc: string[], cur: Blog) => {
		const tags = cur.meta.tags || [];
		return Array.from(new Set([...acc, ...tags]));
	}, []);
	const [tag, setTag] = useState<string | null>(null);
	const filteredNotes = useMemo(
		() =>
			tag
				? allNotes.filter(note => note.meta.tags?.includes(tag))
				: allNotes,
		[allNotes, tag]
	);

	return (
		<section aria-labelledby="notes-heading" className="px-8">
			<div className="flex justify-between my-3">
				<h2 id="notes-heading" className="text-2xl capitalize font-semibold">notes</h2>
				<Select
					data={allTags}
					value={tag || allTags[0]}
					onValueChange={setTag}
				>
					标签筛选
				</Select>
			</div>
			<motion.ol layout className="grid grid-cols-1 gap-4 sm:grid-cols-3">
				<AnimatePresence>
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
				</AnimatePresence>
			</motion.ol>
		</section>
	);
};

export default NoteList;
