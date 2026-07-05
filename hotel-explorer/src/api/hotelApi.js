const BASE_URL = 'https://demohotelsapi.pythonanywhere.com/hotels/';

/**
 * Strips undefined / null / empty-string values so we never send
 * junk query params like `?price=&rating=` to the API.
 */
function cleanParams(params) {
  const cleaned = {};
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== '') {
      cleaned[key] = value;
    }
  });
  return cleaned;
}

/**
 * Fetches hotels from the Demo Hotels API.
 *
 * Supported params (per API docs):
 *  - search: matches name OR location (icontains)
 *  - location: matches location only
 *  - price: exact price match
 *  - min_price / max_price: price range
 *  - rating: exact rating match
 *  - min_rating / max_rating: rating range
 *  - order_by: e.g. "-rating", "price"
 *  - limit / skip: pagination
 */
export async function fetchHotels(params = {}) {
  const query = new URLSearchParams(cleanParams(params)).toString();
  const url = query ? `${BASE_URL}?${query}` : BASE_URL;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Hotel search failed (${response.status})`);
  }

  const payload = await response.json();

  if (payload.status && payload.status !== 200) {
    throw new Error(payload.message || 'Hotel search failed');
  }

  return {
    hotels: payload.data ?? [],
    total: payload.count ?? payload.data?.length ?? 0,
  };
}

export async function fetchHotelById(id) {
  const response = await fetch(`${BASE_URL}${id}/`);
  if (!response.ok) {
    throw new Error(`Could not load hotel #${id} (${response.status})`);
  }
  const payload = await response.json();
  return payload.data ?? payload;
}
