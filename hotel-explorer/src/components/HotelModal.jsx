import { useEffect, useState } from 'react';
import { formatPrice, formatRating, hotelCode } from '../utils/format';

export default function HotelModal({ hotel, onClose }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    setActivePhoto(0);
    setBooked(false);
  }, [hotel]);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!hotel) return null;

  const photos = hotel.photos?.length ? hotel.photos : [hotel.thumbnail];

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal__close" onClick={onClose} aria-label="Close details">
          ✕
        </button>

        <div className="modal__gallery">
          <img src={photos[activePhoto]} alt={`${hotel.name} view ${activePhoto + 1}`} />
          {photos.length > 1 && (
            <div className="modal__thumbs">
              {photos.slice(0, 8).map((photo, index) => (
                <button
                  key={photo + index}
                  className={`modal__thumb ${index === activePhoto ? 'is-active' : ''}`}
                  onClick={() => setActivePhoto(index)}
                  aria-label={`Show photo ${index + 1}`}
                >
                  <img src={photo} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal__content">
          <span className="ticket__code">{hotelCode(hotel.id)}</span>
          <h2 id="modal-title">{hotel.name}</h2>
          <p className="modal__location">📍 {hotel.location}</p>

          <div className="modal__stats">
            <div className="stamp stamp--modal">
              <span className="stamp__value">{formatRating(hotel.rating)}</span>
              <span className="stamp__label">RATING</span>
            </div>
            <div className="modal__price">
              <span className="ticket__price-label">per night</span>
              <span className="ticket__price-value">{formatPrice(hotel.price)}</span>
            </div>
          </div>

          <p className="modal__description">{hotel.description}</p>

          {booked ? (
            <p className="modal__confirmation" role="status">
              ✓ Reserved — confirmation code {hotelCode(hotel.id)}-{Date.now().toString().slice(-4)}
            </p>
          ) : (
            <button className="btn btn--book btn--large" onClick={() => setBooked(true)}>
              Reserve this stay
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
