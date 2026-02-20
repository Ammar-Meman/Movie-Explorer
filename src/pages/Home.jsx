import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import "./Home.css";

const API_KEY = "81025766";
const API_URL = `https://www.omdbapi.com/?apikey=${API_KEY}`;

function Home({ favorites, onToggleFavorite }) {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("Batman");
  const [inputValue, setInputValue] = useState("Batman");
  const [type, setType] = useState("");
  const [year, setYear] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMovies = async (query, filterType, filterYear) => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);
    try {
      let url = `${API_URL}&s=${encodeURIComponent(query)}`;
      if (filterType) url += `&type=${filterType}`;
      if (filterYear && filterYear.length === 4 && !isNaN(filterYear)) {
        url += `&y=${filterYear}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error || "No movies found.");
        setMovies([]);
      }
    } catch (err) {
      setError("Failed to fetch movies. Please check your connection.");
      setMovies([]);
    } finally {
      setLoading(false);
    }
  };

  // Load default movies on mount
  useEffect(() => {
    fetchMovies("Batman", "", "");
  }, []);

  // Re-fetch when filters change (type / year)
  useEffect(() => {
    if (searchTerm) {
      fetchMovies(searchTerm, type, year);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type, year]);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = inputValue.trim();
    if (trimmed) {
      setSearchTerm(trimmed);
      fetchMovies(trimmed, type, year);
    }
  };

  return (
    <div className="home-page">
      <div className="search-section">
        <h1>
          Movie <span>Explorer</span>
        </h1>
        <p className="search-subtitle">
          Discover, search, and save your favourite films.
        </p>

        <form onSubmit={handleSearch}>
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search movies, series..."
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>

          <div className="filter-row">
            <div className="filter-group">
              <label htmlFor="type-filter">Type:</label>
              <select
                id="type-filter"
                className="filter-input"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="">All</option>
                <option value="movie">Movies</option>
                <option value="series">Series</option>
              </select>
            </div>

            <div className="filter-group">
              <label htmlFor="year-filter">Year:</label>
              <input
                type="number"
                id="year-filter"
                className="filter-input year-input"
                placeholder="e.g. 2023"
                value={year}
                min="1900"
                max="2099"
                onChange={(e) => setYear(e.target.value)}
              />
            </div>
          </div>
        </form>
      </div>

      {loading && <div className="loading">Searching movies...</div>}
      {error && !loading && <div className="error-message">⚠ {error}</div>}

      {!loading && movies.length > 0 && (
        <p className="results-info">
          Showing <span>{movies.length}</span> result
          {movies.length !== 1 ? "s" : ""} for{" "}
          <span>"{searchTerm}"</span>
          {type ? ` · ${type}` : ""}
          {year ? ` · ${year}` : ""}
        </p>
      )}

      <div className="movie-grid">
        {!loading &&
          movies.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={favorites.includes(movie.imdbID)}
              onFavorite={onToggleFavorite}
            />
          ))}
      </div>
    </div>
  );
}

export default Home;
