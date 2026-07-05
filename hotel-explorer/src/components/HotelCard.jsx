import { formatPrice, formatRating, hotelCode } from '../utils/format';

export default function HotelCard({ hotel, onSelect }) {
  return (
    <article className="ticket">
      <button
        className="ticket__photo"
        onClick={() => onSelect(hotel)}
        aria-label={`View details for ${hotel.name}`}
      >
        <img src={hotel.thumbnail} alt={hotel.name} loading="lazy" />
        <span className="ticket__code">{hotelCode(hotel.id)}</span>
      </button>

      <div className="ticket__body">
        <div className="ticket__heading">
          <h3>{hotel.name}</h3>
          <p className="ticket__location">{hotel.location}</p>
        </div>
        <p className="ticket__desc">{hotel.description}</p>
      </div>

      <div className="ticket__perforation" aria-hidden="true">
        <span className="ticket__hole" />
      </div>

      <div className="ticket__stub">
        <div className="stamp" title={`Rated ${formatRating(hotel.rating)} out of 5`}>
          <span className="stamp__value">{formatRating(hotel.rating)}</span>
          <span className="stamp__label">RATING</span>
        </div>
        <div className="ticket__price">
          <span className="ticket__price-label">per night</span>
          <span className="ticket__price-value">{formatPrice(hotel.price)}</span>
        </div>
        <button className="btn btn--book" onClick={() => onSelect(hotel)}>
          View stay
        </button>
      </div>
    </article>
  );
}
