import React, { useState } from "react";
import MovieCard from "./MovieCard";
import Nav from "./Nav";
import "../styles/styles.css";
import "../styles/outils.css";

export const MovieGrid = ({
  movies,
  watchList,
  toggleWatchList,
  genres,
  ratings,
}) => {
  //States
  const [search, setSearch] = useState("");

  //Events function
  //input
  const handleInput = (e) => {
    setSearch(e.target.value);
  };

  //Functions
  const matchSearch = (movie, search) => {
    return movie.title.toLowerCase().includes(search.toLowerCase());
  };
  const matchGenre = (movie, genre) => {
    return genre === "All" || movie.genre.toLowerCase() === genre.toLowerCase();
  };
  const matchRating = (movie, rating) => {
    switch (rating) {
      case "All":
        return true;

      case "Good":
        return movie.rating > 8;

      case "Bad":
        return movie.rating < 5;

      case "Ok":
        return movie.rating >= 5 && movie.rating <= 8;

      default:
        return false;
    }
  };
  //filter search
  const filteredMovies = movies.filter((movie) => {
    return (
      matchSearch(movie, search) &&
      matchGenre(movie, genres) &&
      matchRating(movie, ratings)
    );
  });

  return (
    <div>
      {/* Search bar */}
      <input
        type="text"
        placeholder="Search movies..."
        className="search-input"
        value={search}
        onChange={handleInput}
      />

      {/* Movie card display in grid */}
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            movie={movie}
            key={movie.id}
            toggleWatchList={toggleWatchList}
            isWatchListed={watchList.includes(movie.id)}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
};
