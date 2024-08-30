import React from "react";
import '../styles/styles.css'
import MovieCard from "./MovieCard";
import '../styles/outils.css'

export default function WatchList({watchList, movies, toggleWatchList}) {
  return (
    <div>
      <h1 className="title">My Watchlist</h1>
      <div className="watchlist">
        {watchList.map((id) => {
          const movie = movies.find((movie) => movie.id === id);
          return (
            <MovieCard
              movie={movie}
              key={id}
              isWatchListed={true}
              toggleWatchList={toggleWatchList}
            ></MovieCard>
          );
        })}
      </div>
    </div>
  )
}
