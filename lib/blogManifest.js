/**
 * Lecture seule des articles (fs + gray-matter).
 * Utilisé par le sitemap pour éviter d'importer remark/rehype (risque d'erreur 500 en prod).
 */
import fs from "fs";
import matter from "gray-matter";
import path from "path";

const postsDirectory = path.join(process.cwd(), "content/blog");

export function getAllPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter(
      (fileName) =>
        fileName.endsWith(".md") &&
        !fileName.startsWith("_") &&
        fileName !== "README.md"
    )
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || "Sans titre",
        date: data.date || new Date().toISOString(),
        excerpt: data.excerpt || content.substring(0, 150) + "...",
        image: data.image || "/bg-image.png",
        category: data.category || "Actualités",
        author: data.author || "Taxi Marseille",
        ...data,
      };
    });

  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    }
    return -1;
  });
}

export function getAllPostSlugs() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter(
      (fileName) =>
        fileName.endsWith(".md") &&
        !fileName.startsWith("_") &&
        fileName !== "README.md"
    )
    .map((fileName) => ({
      slug: fileName.replace(/\.md$/, ""),
    }));
}
