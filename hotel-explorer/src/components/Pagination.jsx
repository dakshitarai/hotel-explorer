export default function Pagination({ skip, limit, total, onPageChange }) {
  const currentPage = Math.floor(skip / limit) + 1;
  const totalPages = Math.max(1, Math.ceil(total / limit));

  if (totalPages <= 1) return null;

  function goTo(page) {
    const clamped = Math.min(Math.max(page, 1), totalPages);
    onPageChange((clamped - 1) * limit);
  }

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        className="btn btn--ghost"
        onClick={() => goTo(currentPage - 1)}
        disabled={currentPage === 1}
      >
        ← Previous
      </button>
      <span className="pagination__status">
        Page <strong>{currentPage}</strong> of {totalPages}
      </span>
      <button
        className="btn btn--ghost"
        onClick={() => goTo(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next →
      </button>
    </nav>
  );
}
