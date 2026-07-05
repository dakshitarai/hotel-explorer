import { useState } from 'react';
import Header from './components/Header';
import SearchPanel from './components/SearchPanel';
import HotelGrid from './components/HotelGrid';
import HotelModal from './components/HotelModal';
import Pagination from './components/Pagination';
import { LoadingState, ErrorState, EmptyState } from './components/StatusMessage';
import { useHotels } from './hooks/useHotels';
import { DEFAULT_FILTERS } from './utils/constants';
import './App.css';

export default function App() {
  const [filters, setFilters] = useState(DEFAULT_FILTERS);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const { hotels, total, status, errorMessage } = useHotels(filters);

  function handleReset() {
    setFilters(DEFAULT_FILTERS);
  }

  function handlePageChange(skip) {
    setFilters((prev) => ({ ...prev, skip }));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className="app">
      <Header />

      <main className="container">
        <SearchPanel
          filters={filters}
          onChange={setFilters}
          onReset={handleReset}
          resultCount={status === 'loading' ? null : total}
        />

        {status === 'loading' && <LoadingState />}
        {status === 'error' && (
          <ErrorState message={errorMessage} onRetry={() => setFilters({ ...filters })} />
        )}
        {status === 'success' && hotels.length === 0 && <EmptyState onReset={handleReset} />}
        {status === 'success' && hotels.length > 0 && (
          <>
            <HotelGrid hotels={hotels} onSelect={setSelectedHotel} />
            <Pagination
              skip={filters.skip}
              limit={filters.limit}
              total={total}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>

      <footer className="footer">
        <p>
          Built on the{' '}
          <a href="https://demohotelsapi.pythonanywhere.com/" target="_blank" rel="noreferrer">
            Demo Hotels API
          </a>{' '}
          by Aarav Harithas.
        </p>
      </footer>

      <HotelModal hotel={selectedHotel} onClose={() => setSelectedHotel(null)} />
    </div>
  );
}
