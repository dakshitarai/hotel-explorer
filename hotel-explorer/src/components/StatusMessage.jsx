export function LoadingState() {
  return (
    <div className="status status--loading" role="status">
      <div className="status__spinner" aria-hidden="true" />
      <p>Checking the reservation chart…</p>
    </div>
  );
}

export function ErrorState({ message, onRetry }) {
  return (
    <div className="status status--error" role="alert">
      <p className="status__title">The search couldn't be completed.</p>
      <p>{message}</p>
      <button type="button" className="btn btn--ghost" onClick={onRetry}>
        Try again
      </button>
    </div>
  );
}

export function EmptyState({ onReset }) {
  return (
    <div className="status status--empty">
      <p className="status__title">No stays match these filters.</p>
      <p>Try widening the price or rating range, or clear the filters to start over.</p>
      <button type="button" className="btn btn--ghost" onClick={onReset}>
        Clear filters
      </button>
    </div>
  );
}
