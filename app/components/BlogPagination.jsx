import {
  buildBlogListUrl,
  getVisiblePageNumbers,
} from "@/lib/blogPagination";
import { ChevronLeft, ChevronRight, MoreHorizontal } from "lucide-react";
import Link from "next/link";

function NavButton({ href, disabled, children, ariaLabel, className = "" }) {
  const base =
    "inline-flex h-11 min-w-11 items-center justify-center rounded-xl border text-sm font-semibold transition-all duration-200";

  if (disabled) {
    return (
      <span
        aria-disabled="true"
        aria-label={ariaLabel}
        className={`${base} cursor-not-allowed border-slate-200 bg-slate-50 text-slate-300 ${className}`}
      >
        {children}
      </span>
    );
  }

  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${base} border-slate-200 bg-white text-slate-700 shadow-sm hover:border-cyan-300/60 hover:bg-cyan-50/50 hover:text-cyan-900 hover:shadow-md ${className}`}
    >
      {children}
    </Link>
  );
}

export default function BlogPagination({
  currentPage,
  totalPages,
  totalItems,
  categoryId = null,
  perPage,
}) {
  if (totalPages <= 1) return null;

  const pageNumbers = getVisiblePageNumbers(currentPage, totalPages);
  const startItem = (currentPage - 1) * perPage + 1;
  const endItem = Math.min(currentPage * perPage, totalItems);

  const articlesAnchor = "#articles";
  const prevHrefWithAnchor = `${buildBlogListUrl({
    category: categoryId,
    page: currentPage - 1,
  })}${articlesAnchor}`;
  const nextHrefWithAnchor = `${buildBlogListUrl({
    category: categoryId,
    page: currentPage + 1,
  })}${articlesAnchor}`;

  return (
    <nav
      className="mt-14"
      aria-label="Pagination des articles du blog"
    >
      <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200/80 bg-linear-to-br from-white via-slate-50/80 to-cyan-50/30 p-4 shadow-lg shadow-slate-200/50 ring-1 ring-white/80 backdrop-blur-sm sm:p-5">
        <p className="mb-4 text-center text-sm text-slate-600">
          Articles{" "}
          <span className="font-semibold text-slate-900">
            {startItem}–{endItem}
          </span>{" "}
          sur{" "}
          <span className="font-semibold text-slate-900">{totalItems}</span>
          <span className="mx-2 text-slate-300" aria-hidden>
            ·
          </span>
          Page{" "}
          <span className="font-semibold text-cyan-700">{currentPage}</span>{" "}
          sur {totalPages}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <NavButton
            href={prevHrefWithAnchor}
            disabled={currentPage <= 1}
            ariaLabel="Page précédente"
            className="gap-1 px-3 sm:px-4"
          >
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            <span className="hidden sm:inline">Précédent</span>
          </NavButton>

          <ul className="flex flex-wrap items-center justify-center gap-1.5">
            {pageNumbers.map((page, index) =>
              page === null ? (
                <li key={`ellipsis-${index}`} aria-hidden>
                  <span className="flex h-11 w-9 items-center justify-center text-slate-400">
                    <MoreHorizontal className="h-4 w-4" />
                  </span>
                </li>
              ) : (
                <li key={page}>
                  {page === currentPage ? (
                    <span
                      aria-current="page"
                      className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl bg-linear-to-br from-cyan-600 via-blue-600 to-blue-700 px-3 text-sm font-bold text-white shadow-lg shadow-cyan-500/30 ring-2 ring-cyan-400/30"
                    >
                      {page}
                    </span>
                  ) : (
                    <Link
                      href={`${buildBlogListUrl({
                        category: categoryId,
                        page,
                      })}${articlesAnchor}`}
                      className="inline-flex h-11 min-w-11 items-center justify-center rounded-xl border border-transparent px-3 text-sm font-semibold text-slate-600 transition-all duration-200 hover:border-cyan-200 hover:bg-white hover:text-cyan-800 hover:shadow-sm"
                      aria-label={`Page ${page}`}
                    >
                      {page}
                    </Link>
                  )}
                </li>
              )
            )}
          </ul>

          <NavButton
            href={nextHrefWithAnchor}
            disabled={currentPage >= totalPages}
            ariaLabel="Page suivante"
            className="gap-1 px-3 sm:px-4"
          >
            <span className="hidden sm:inline">Suivant</span>
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </NavButton>
        </div>

        {/* Barre de progression visuelle */}
        <div
          className="mt-4 h-1.5 overflow-hidden rounded-full bg-slate-200/80"
          role="progressbar"
          aria-valuenow={currentPage}
          aria-valuemin={1}
          aria-valuemax={totalPages}
          aria-label={`Progression : page ${currentPage} sur ${totalPages}`}
        >
          <div
            className="h-full rounded-full bg-linear-to-r from-cyan-500 to-blue-600 transition-all duration-500 ease-out"
            style={{ width: `${(currentPage / totalPages) * 100}%` }}
          />
        </div>
      </div>
    </nav>
  );
}
