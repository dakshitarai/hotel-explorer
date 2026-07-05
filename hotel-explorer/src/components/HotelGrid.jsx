import HotelCard from './HotelCard';

export default function HotelGrid({ hotels, onSelect }) {
  return (
    <div className="grid">
      {hotels.map((hotel) => (
        <HotelCard key={hotel.id} hotel={hotel} onSelect={onSelect} />
      ))}
    </div>
  );
}
