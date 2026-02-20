import "./About.css";

function About() {
  return (
    <div className="about-page">
      <h1>About Movie Explorer</h1>
      <span className="about-tag">React App</span>

      <p className="about-intro">
        Movie Explorer is a modern web application built with React that lets
        you discover, search, and save your favourite films and series. It
        connects to the OMDb API to fetch real-time movie data and stores your
        favourites locally in your browser — no account needed.
      </p>

      <div className="about-features">
        <h2>Core Features</h2>
        <ul className="feature-list">
          <li>
            <span className="feature-icon">🔍</span>
            Instant search across thousands of movies and TV series.
          </li>
          <li>
            <span className="feature-icon">🎭</span>
            Filter results by type (Movie / Series) and release year.
          </li>
          <li>
            <span className="feature-icon">🎬</span>
            Detailed pages with plot, genre, rating, director, and cast.
          </li>
          <li>
            <span className="feature-icon">❤️</span>
            Save and manage your personal favourites — stored in{" "}
            <code>localStorage</code>, no login required.
          </li>
          <li>
            <span className="feature-icon">📱</span>
            Fully responsive design for mobile and desktop.
          </li>
        </ul>
      </div>

      <div className="about-tech">
        <p>
          Powered by the{" "}
          <a
            href="http://www.omdbapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            OMDb API
          </a>
          . Built with:
        </p>
        <div className="tech-badges">
          <span className="tech-badge">React 19</span>
          <span className="tech-badge">React Router v7</span>
          <span className="tech-badge">OMDb API</span>
          <span className="tech-badge">localStorage</span>
          <span className="tech-badge">Vite</span>
        </div>
      </div>
    </div>
  );
}

export default About;
