# 🎬 Movie Explorer

A modern React application that lets you search, explore, and save your favorite movies using the **OMDb API**.

---

## 🚀 Live Demo

> Coming soon / Deploy link here

---

## ✨ Features

- 🔍 **Search Movies** — Search any movie by title using the OMDb API
- 🎥 **Movie Details** — View detailed info like plot, cast, ratings, genre, and release year
- ❤️ **Favorites** — Save and manage your favorite movies (stored in localStorage)
- 📱 **Responsive Design** — Works seamlessly on all screen sizes
- 🧭 **Multi-page Navigation** — Smooth routing with React Router DOM

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React 19 | UI Framework |
| Vite | Build Tool & Dev Server |
| React Router DOM v7 | Client-side Routing |
| OMDb API | Movie Data Source |
| CSS Modules | Styling |

---

## 📁 Project Structure

```
movie-explorer/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navigation bar
│   │   ├── Navbar.css
│   │   ├── MovieCard.jsx    # Movie card component
│   │   └── MovieCard.css
│   ├── pages/
│   │   ├── Home.jsx         # Search & browse movies
│   │   ├── Home.css
│   │   ├── MovieDetails.jsx # Detailed movie view
│   │   ├── MovieDetails.css
│   │   ├── Favorites.jsx    # Saved favorites
│   │   ├── Favorites.css
│   │   ├── About.jsx        # About page
│   │   └── About.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js (v18 or above)
- npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Ammar-Meman/Movie-Explorer.git
   cd Movie-Explorer
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Get your free OMDb API key**
   - Visit [https://www.omdbapi.com/apikey.aspx](https://www.omdbapi.com/apikey.aspx) and sign up for a free key.

4. **Add your API key**
   - Open `src/pages/Home.jsx` and `src/pages/MovieDetails.jsx`
   - Replace the existing API key with your own:
     ```js
     const API_KEY = "your_api_key_here";
     ```

5. **Start the development server**
   ```bash
   npm run dev
   ```

6. Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📦 Build for Production

```bash
npm run build
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🙋‍♂️ Author

**Ammar Meman**  
GitHub: [@Ammar-Meman](https://github.com/Ammar-Meman)
