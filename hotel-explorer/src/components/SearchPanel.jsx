import { CITIES, SORT_OPTIONS, PAGE_SIZE_OPTIONS } from '../utils/constants';

export default function SearchPanel({ filters, onChange, onReset, resultCount }) {
  function update(field, value) {
    onChange({ ...filters, [field]: value, skip: 0 });
  }

  const hasActiveFilters =
    filters.search || filters.location || filters.min_price || filters.max_price ||
    filters.min_rating || filters.max_rating || filters.order_by;

  return (
    <section className="planner" aria-label="Search and filter hotels">
      <div className="planner__row planner__row--main">
        <div className="field field--grow">
          <label htmlFor="search">Search by name or city</label>
          <input
            id="search"
            type="text"
            placeholder="e.g. Regal Crescent, or Goa"
            value={filters.search}
            onChange={(e) => update('search', e.target.value)}
          />
        </div>

        <div className="field">
          <label htmlFor="location">City</label>
          <select
            id="location"
            value={filters.location}
            onChange={(e) => update('location', e.target.value)}
          >
            <option value="">All cities</option>
            {CITIES.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="order_by">Sort by</label>
          <select
            id="order_by"
            value={filters.order_by}
            onChange={(e) => update('order_by', e.target.value)}
          >
            {SORT_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="planner__row">
        <fieldset className="field-group">
          <legend>Price range (₹)</legend>
          <div className="field-group__inputs">
            <input
              type="number"
              min="0"
              placeholder="Min"
              aria-label="Minimum price"
              value={filters.min_price}
              onChange={(e) => update('min_price', e.target.value)}
            />
            <span className="field-group__sep">–</span>
            <input
              type="number"
              min="0"
              placeholder="Max"
              aria-label="Maximum price"
              value={filters.max_price}
              onChange={(e) => update('max_price', e.target.value)}
            />
          </div>
        </fieldset>

        <fieldset className="field-group">
          <legend>Rating range</legend>
          <div className="field-group__inputs">
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              placeholder="Min"
              aria-label="Minimum rating"
              value={filters.min_rating}
              onChange={(e) => update('min_rating', e.target.value)}
            />
            <span className="field-group__sep">–</span>
            <input
              type="number"
              min="0"
              max="5"
              step="0.1"
              placeholder="Max"
              aria-label="Maximum rating"
              value={filters.max_rating}
              onChange={(e) => update('max_rating', e.target.value)}
            />
          </div>
        </fieldset>

        <div className="field">
          <label htmlFor="limit">Per page</label>
          <select
            id="limit"
            value={filters.limit}
            onChange={(e) => onChange({ ...filters, limit: Number(e.target.value), skip: 0 })}
          >
            {PAGE_SIZE_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="planner__footer">
        <span className="planner__count">
          {resultCount === null ? 'Searching…' : `${resultCount} stay${resultCount === 1 ? '' : 's'} found`}
        </span>
        {hasActiveFilters && (
          <button type="button" className="btn btn--ghost" onClick={onReset}>
            Clear filters
          </button>
        )}
      </div>
    </section>
  );
}
