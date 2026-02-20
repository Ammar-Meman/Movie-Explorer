import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetails from "./pages/MovieDetails";
import Favorites from "./pages/Favorites";
import About from "./pages/About";
import "./App.css";

function App() {
  // Store only movie IDs in state (mirrored to localStorage)
  const [favorites, setFavorites] = useState(() => {
    try {
      const saved = localStorage.getItem("favorites");
      const parsed = saved ? JSON.parse(saved) : [];
      return Array.isArray(parsed)
        ? parsed.filter((id) => id && typeof id === "string")
        : [];
    } catch {
      return [];
    }
  });

  // Keep localStorage in sync whenever favorites state changes
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Toggle — add if not present, remove if present (no duplicates)
  const toggleFavorite = (imdbID) => {
    if (!imdbID) return;
    setFavorites((prev) =>
      prev.includes(imdbID)
        ? prev.filter((id) => id !== imdbID)
        : [...prev, imdbID]
    );
  };

  return (
    <div className="app-container">
      <Navbar favoriteCount={favorites.length} />
      <main className="main-content">
        <Routes>
          <Route
            path="/"
            element={
              <Home favorites={favorites} onToggleFavorite={toggleFavorite} />
            }
          />
          {/* MovieDetails gets favorites + toggle so Add to Favorites works */}
          <Route
            path="/movie/:id"
            element={
              <MovieDetails
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route
            path="/favorites"
            element={
              <Favorites
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
              />
            }
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
