import React from "react";
import '../styles/styles.css'
import '../styles/outils.css'

export default function MovieCard({ movie, isWatchListed, toggleWatchList }) {
  //Events
  const handleError = (e) => {
    e.target.src = "./image/default.png";
  };
  //Fuctions
  //rating color
  const handleRating = (rating) => {
    if (rating > 8) return "rating-good";
    else if (rating < 5) return "rating-bad";
    else return "rating-ok";
  };

  //JSX
  return (
    <div key={movie.id} className="movie-card">
      <img
        src={`images/${movie.image}`}
        alt={movie.title}
        onError={handleError}
      />
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${handleRating(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>

        <label className="switch">
          <input
            type="checkbox"
            checked={isWatchListed}
            onChange={() => toggleWatchList(movie)}
          ></input>

          <span className="slider">
            <span className="slider-label">
              {isWatchListed ? "In Watchlist" : "Add to Watchlist"}
            </span>
          </span>
        </label>
      </div>
    </div>
  );
}
