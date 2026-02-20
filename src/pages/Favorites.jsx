import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import "./Favorites.css";

const API_KEY = "81025766";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Favorites({ favorites, onToggleFavorite }) {
  const [movieData, setMovieData] = useState([]);
  const [loading, setLoading] = useState(false);

  // Read IDs from favorites prop (sourced from localStorage in App.jsx)
  // For each ID, fetch full movie details
  useEffect(() => {
    if (favorites.length === 0) {
      setMovieData([]);
      return;
    }

    const fetchFavoriteMovies = async () => {
      setLoading(true);
      try {
        const promises = favorites.map((id) =>
          fetch(`${API_URL}&i=${id}`).then((res) => res.json())
        );
        const results = await Promise.all(promises);
        setMovieData(results.filter((res) => res.Response === "True"));
      } catch (err) {
        console.error("Error fetching favorite movies:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchFavoriteMovies();
  }, [favorites]);

  return (
    <div className="favorites-page">
      <h1>Your <span>Favorites</span></h1>
      {!loading && favorites.length > 0 && (
        <p className="favorites-subtitle">
          You have {favorites.length} saved movie{favorites.length !== 1 ? "s" : ""}.
        </p>
      )}

      {loading && <div className="loading">Loading favorites...</div>}

      {/* Requirement: display message when no favorites */}
      {!loading && favorites.length === 0 && (
        <div className="no-favorites">
          <div className="empty-icon">🎬</div>
          <p>No favorite movies added.</p>
          <Link to="/">Browse Movies</Link>
        </div>
      )}

      <div className="movie-grid">
        {!loading &&
          movieData.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              onFavorite={onToggleFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default Favorites;
