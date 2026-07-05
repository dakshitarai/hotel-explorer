import { useEffect, useRef, useState } from 'react';
import { fetchHotels } from '../api/hotelApi';

const DEBOUNCE_MS = 400;

/**
 * Fetches hotels whenever `filters` changes, with a small debounce so
 * typing in the search box doesn't fire a request per keystroke.
 */
export function useHotels(filters) {
  const [hotels, setHotels] = useState([]);
  const [total, setTotal] = useState(0);
  const [status, setStatus] = useState('loading'); // 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');
  const requestId = useRef(0);

  useEffect(() => {
    const currentRequest = ++requestId.current;
    setStatus('loading');

    const timer = setTimeout(async () => {
      try {
        const { hotels: results, total: count } = await fetchHotels(filters);
        if (currentRequest !== requestId.current) return; // stale response, ignore
        setHotels(results);
        setTotal(count);
        setStatus('success');
      } catch (err) {
        if (currentRequest !== requestId.current) return;
        setErrorMessage(err.message || 'Something went wrong while fetching hotels.');
        setStatus('error');
      }
    }, DEBOUNCE_MS);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(filters)]);

  return { hotels, total, status, errorMessage };
}
