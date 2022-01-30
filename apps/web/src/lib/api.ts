import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import { sync } from "glob";
import type { ParsedBlog } from "@types";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
	return fs.readdirSync(postsDirectory);
}

export const getSlugs = (): string[] => {
	const paths = sync(`${postsDirectory}/*.md`);

	const slugs = paths.map(path => {
		const parts = path.split("/");
		const fileName = parts[parts.length - 1];
		const [slug, _ext] = fileName.split(".");
		return slug;
	});
	return slugs;
};

export async function getPostBySlug(slug: string): Promise<ParsedBlog> {
	const realSlug = slug.replace(/\.md$/, "");
	const fullPath = join(postsDirectory, `${realSlug}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");
	const { data, content } = matter(fileContents);

	return { content, meta: data, slug: realSlug } as ParsedBlog;
}

export async function getAllPosts() {
	const slugs = getPostSlugs();
	const _posts = slugs.map(slug => getPostBySlug(slug));
	const posts = await Promise.all(_posts).then(posts =>
		posts.sort((post1, post2) =>
			post1.meta.date > post2.meta.date ? -1 : 1
		)
	);

	return posts;
}
