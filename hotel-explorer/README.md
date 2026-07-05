# Hotel Explorer

An interactive hotel search app built with React + Vite, powered entirely by the
[Demo Hotels API](https://demohotelsapi.pythonanywhere.com/).

Search by name or city, filter by price and rating range, sort results, page through
500 listings, and open a detail view with a photo gallery and a mock reservation flow.

## Features

- **Live search** — debounced search across hotel name and location
- **Filters** — city dropdown, price range, rating range, all wired to the API's own
  query parameters (`min_price`, `max_price`, `min_rating`, `max_rating`, `location`, `search`)
- **Sorting** — by rating or price, ascending/descending, via `order_by`
- **Pagination** — `limit` / `skip` based, with adjustable page size
- **Detail modal** — full description, photo gallery, and a mock "Reserve this stay" action
- **Responsive UI** — works down to small mobile widths
- **Loading / error / empty states** — clear feedback at every step

## Tech stack

- React 18
- Vite
- Plain CSS (custom design system, no framework) — see `src/App.css`

## Project structure

```
hotel-explorer/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx              # React entry point
│   ├── App.jsx                # Top-level state & layout
│   ├── App.css                # Design system + component styles
│   ├── index.css              # Reset + CSS variables (design tokens)
│   ├── api/
│   │   └── hotelApi.js        # All fetch() calls to the Hotels API live here
│   ├── hooks/
│   │   └── useHotels.js       # Debounced data-fetching hook
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchPanel.jsx
│   │   ├── HotelGrid.jsx
│   │   ├── HotelCard.jsx
│   │   ├── HotelModal.jsx
│   │   ├── Pagination.jsx
│   │   └── StatusMessage.jsx  # Loading / error / empty states
│   └── utils/
│       ├── constants.js       # Cities, sort options, default filters
│       └── format.js          # Price/rating formatting helpers
```

## Getting started

```bash
npm install
npm run dev
```

Then open the URL Vite prints (typically `http://localhost:5173`).

To build for production:

```bash
npm run build
npm run preview
```

## API reference

All requests go to `https://demohotelsapi.pythonanywhere.com/hotels/`. Supported query
parameters (see the [API playground](https://demohotelsapi.pythonanywhere.com/) for the
full list): `search`, `location`, `price`, `min_price`, `max_price`, `rating`,
`min_rating`, `max_rating`, `order_by`, `limit`, `skip`.

## Pushing to GitHub

```bash
git init
git add .
git commit -m "Hotel Explorer: React + Vite app on the Demo Hotels API"
git branch -M main
git remote add origin <your-repo-url>
git push -u origin main
```
