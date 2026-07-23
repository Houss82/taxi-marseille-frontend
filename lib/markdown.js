// ✅ SERVER-SIDE ONLY - Pas de "use client"
// Fonction pour convertir Markdown en HTML

import { remark } from 'remark';
import html from 'remark-html';
import raw from 'rehype-raw';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

export async function markdownToHtml(markdown) {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(raw)
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return result.toString();
}

