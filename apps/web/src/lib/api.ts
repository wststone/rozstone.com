import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { sync } from "glob";
import type { ParsedBlog } from "@types";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeExternalLinks from "rehype-external-links";
import remarkGfm from "remark-gfm";
import remarkMdx from "remark-mdx";
import remarkPrism from "remark-prism";

export const blogsDirectory = join(process.cwd(), "_blogs");
export const notesDirectory = join(process.cwd(), "_notes");
export const resourcesDirectory = join(process.cwd(), "_resources");

export function getSlugsWithExtension(directory: string): string[] {
	return fs.readdirSync(directory);
}

export const getSlugs = (directory: string): string[] => {
	// const paths = getSlugsWithExtension(directory);
	const paths = sync(`${directory}/*.md`);

	const slugs = paths.map(path => {
		const parts = path.split("/");
		const fileName = parts[parts.length - 1];
		const [slug, _ext] = fileName.split(".");
		return slug;
	});
	return slugs;
};

export async function getContentBySlug(
	slug: string,
	directory: string
): Promise<ParsedBlog> {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(directory, `${realSlug}.md`);
	const { birthtime, mtime } = fs.statSync(fullPath);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return {
		content,
		meta: { ...data, date: birthtime.toISOString() },
		slug: realSlug,
	} as ParsedBlog;
}

export async function getAllPosts(directory: string = blogsDirectory) {
	const slugs = getSlugsWithExtension(directory);
	const _posts = slugs.map(slug => getContentBySlug(slug, directory));
	const posts = await Promise.all(_posts).then(posts =>
		posts.sort((post1, post2) =>
			post1.meta.date > post2.meta.date ? -1 : 1
		)
	);

	return posts;
}

export const mdxOptions = {
	remarkPlugins: [
		remarkMdx,
		remarkGfm,
		[
			remarkPrism,
			{
				plugins: [
					"autolinker",
					"command-line",
					"data-uri-highlight",
					"diff-highlight",
					"inline-color",
					"keep-markup",
					"line-numbers",
					"show-invisibles",
					"treeview",
				],
			},
		],
	],
	rehypePlugins: [
		rehypeSlug,
		[rehypeAutolinkHeadings, { behavior: "wrap" }],
		rehypeExternalLinks,
		// [rehypePrism, { showLineNumbers: true }],
	],
};
