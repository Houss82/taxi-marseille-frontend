export const BLOG_POSTS_PER_PAGE = 6;

export function parseBlogPage(pageParam) {
  const parsed = Number.parseInt(String(pageParam ?? "1"), 10);
  return Number.isFinite(parsed) && parsed > 0 ? parsed : 1;
}

export function getTotalPages(totalItems, perPage = BLOG_POSTS_PER_PAGE) {
  if (totalItems <= 0) return 1;
  return Math.ceil(totalItems / perPage);
}

export function getSafePage(requestedPage, totalPages) {
  return Math.min(Math.max(1, requestedPage), totalPages);
}

export function paginatePosts(posts, page, perPage = BLOG_POSTS_PER_PAGE) {
  const start = (page - 1) * perPage;
  return posts.slice(start, start + perPage);
}

/** Numéros de pages à afficher (null = ellipsis) */
export function getVisiblePageNumbers(currentPage, totalPages, siblingCount = 1) {
  if (totalPages <= 1) return [1];

  const pages = new Set([1, totalPages, currentPage]);
  for (let i = 1; i <= siblingCount; i += 1) {
    pages.add(currentPage - i);
    pages.add(currentPage + i);
  }

  const sorted = [...pages].filter((p) => p >= 1 && p <= totalPages).sort((a, b) => a - b);
  const result = [];

  for (let i = 0; i < sorted.length; i += 1) {
    const page = sorted[i];
    const prev = sorted[i - 1];
    if (i > 0 && page - prev > 1) {
      result.push(null);
    }
    result.push(page);
  }

  return result;
}

export function buildBlogListUrl({ category, page } = {}) {
  const params = new URLSearchParams();
  if (category) params.set("category", category);
  if (page && page > 1) params.set("page", String(page));
  const query = params.toString();
  return query ? `/blog?${query}` : "/blog";
}
