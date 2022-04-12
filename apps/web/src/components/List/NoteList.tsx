import { FC, useCallback, useMemo, useState } from "react";
import { Blog } from "@types";
import ListNoteItem from "./ListNoteItem";
import { AnimatePresence, motion } from "framer-motion";
import { Select } from "ui";
import { useTranslation } from "next-i18next";
interface NoteListProp {
	allNotes: Blog[];
}

export const NoteList: FC<NoteListProp> = ({ allNotes }) => {
	const { t } = useTranslation();
	const all = t("all");
	const allTags = allNotes.reduce((acc: string[], cur: Blog) => {
		const tags = cur.meta.tags || [];
		return Array.from(new Set([all, ...acc, ...tags]));
	}, []);
	const [tag, setTag] = useState<string | null>(() => all);
	const filteredNotes = useMemo(
		() =>
			tag === all
				? allNotes
				: allNotes.filter(note => note.meta.tags?.includes(tag)),
		[allNotes, tag, all]
	);

	return (
		<section aria-labelledby="notes-heading" className="px-8">
			<div className="flex justify-between my-3">
				<h2
					id="notes-heading"
					className="text-2xl capitalize font-semibold"
				>
					notes
				</h2>
				<Select options={allTags} value={tag} onValueChange={setTag}>
					{tag === all ? t("filterTags") : tag}
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
							content={blog.content}
						/>
					))}
				</AnimatePresence>
			</motion.ol>
		</section>
	);
};

export default NoteList;
