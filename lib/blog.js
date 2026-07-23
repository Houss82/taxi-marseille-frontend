import fs from "fs";
import matter from "gray-matter";
import path from "path";
import rehypeRaw from "rehype-raw";
import rehypeStringify from "rehype-stringify";
import { remark } from "remark";
import remarkRehype from "remark-rehype";

import { getAllPostSlugs, getAllPosts } from "./blogManifest";

const postsDirectory = path.join(process.cwd(), "content/blog");

// Réexport — logique de listing dans blogManifest (sitemap n'importe pas remark)
export { getAllPostSlugs, getAllPosts };

// Récupérer un article par son slug
export async function getPostBySlug(slug) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);

  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const processedContent = await remark()
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(content);
  const contentHtml = processedContent.toString();

  return {
    slug,
    contentHtml,
    title: data.title || "Sans titre",
    date: data.date || new Date().toISOString(),
    excerpt: data.excerpt || content.substring(0, 150) + "...",
    image: data.image || "/bg-image.png",
    category: data.category || "Actualités",
    author: data.author || "Taxi Marseille",
    keywords: data.keywords || [],
    ...data,
  };
}

// Récupérer les articles par catégorie
export function getPostsByCategory(category) {
  const allPosts = getAllPosts();
  return allPosts.filter((post) => post.category === category);
}

// Récupérer toutes les catégories
export function getAllCategories() {
  const allPosts = getAllPosts();
  const categories = allPosts.map((post) => post.category);
  return [...new Set(categories)];
}

// Alias pour compatibilité
export const getAllBlogPosts = getAllPosts;
export const getBlogPostBySlug = getPostBySlug;
