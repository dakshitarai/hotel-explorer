export function formatPrice(price) {
  const value = typeof price === 'string' ? parseFloat(price) : price;
  if (Number.isNaN(value)) return '—';
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(value);
}

export function formatRating(rating) {
  const value = typeof rating === 'string' ? parseFloat(rating) : rating;
  if (Number.isNaN(value)) return '—';
  return value.toFixed(1);
}

/** Builds a short ticket-style reference code from a hotel id, e.g. "HTL-0042" */
export function hotelCode(id) {
  return `HTL-${String(id).padStart(4, '0')}`;
}
