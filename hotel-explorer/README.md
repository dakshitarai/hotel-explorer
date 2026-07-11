# 🏨 Hotel Explorer

An interactive hotel search application built with **React** and **Vite**, powered by the **Demo Hotels API**.

Users can search hotels by name or city, filter by price and rating, sort results, browse through 500 hotel listings, and view detailed hotel information with a photo gallery and a mock reservation flow.

## 🌐 Live Demo

👉 https://hotel-explorer-uyp2.vercel.app/

---

## ✨ Features

- 🔍 Debounced search by hotel name or city
- 🏙️ Filter hotels by city
- 💰 Filter by minimum and maximum price
- ⭐ Filter by minimum and maximum rating
- ↕️ Sort by price or rating (ascending/descending)
- 📄 Pagination using `limit` and `skip`
- 🖼️ Hotel details modal with photo gallery
- 📅 Mock hotel reservation flow
- 📱 Fully responsive design
- ⏳ Loading, error, and empty states

---

## 🛠️ Tech Stack

- React 18
- Vite
- JavaScript (ES6+)
- CSS3 (Custom Design System)
- Demo Hotels API

---

## 📁 Project Structure

```text
hotel-explorer/
├── index.html
├── package.json
├── vite.config.js
├── src/
│   ├── main.jsx
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── api/
│   │   └── hotelApi.js
│   ├── hooks/
│   │   └── useHotels.js
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── SearchPanel.jsx
│   │   ├── HotelGrid.jsx
│   │   ├── HotelCard.jsx
│   │   ├── HotelModal.jsx
│   │   ├── Pagination.jsx
│   │   └── StatusMessage.jsx
│   └── utils/
│       ├── constants.js
│       └── format.js
```

---

## 🚀 Getting Started

Clone the repository:

```bash
git clone https://github.com/dakshitarai/hotel-explorer/tree/main/hotel-explorer
```

Navigate into the project:

```bash
cd hotel-explorer
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the URL shown by Vite (usually **http://localhost:5173**).

---

## 📦 Production Build

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🌍 API

This project uses the **Demo Hotels API**.

Supported query parameters include:

- `search`
- `location`
- `price`
- `min_price`
- `max_price`
- `rating`
- `min_rating`
- `max_rating`
- `order_by`
- `limit`
- `skip`

---

## 🎯 Future Improvements

- ❤️ Wishlist/Favorites
- 🔐 User Authentication
- 💳 Real Booking Integration
- 🗺️ Interactive Maps
- 🌙 Dark Mode

---

## 👩‍💻 Author

**Dakshita**

B.Tech Computer Science Engineering Student

---

## 📄 License

This project is created for learning and portfolio purposes.
