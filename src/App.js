import logo from "./logo.svg";
import "./App.css";
// import './styles.css';
import Header from "./components/Header";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import { MovieGrid } from "./components/MovieGrid";
import WatchList from "./components/WatchList";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  //States
  const [movies, setMovies] = useState([]);
  const [watchList, setWatchList] = useState([]);
  const [genres, setGenres] = useState("All");
  const [ratings, setRatings] = useState("All");

  //Fetching json
  useEffect(() => {
    fetch("movies.json")
      .then((requete) => requete.json())
      .then((data) => setMovies(data));
  }, []);

  //Function
  const toggleWatchList = (movie) => {
    setWatchList((state) => {
      return state.includes(movie.id)
        ? state.filter((id) => id !== movie.id)
        : [...state, movie.id];
    });
  };
  return (
    <div className="App">
      <div className="container">
        
        <Header></Header>
        
        <Router>
        <Nav
            genres={genres}
            ratings={ratings}
            setGenres={setGenres}
            setRatings={setRatings}
          ></Nav>
          <Routes>
            <Route
              path="/"
              element={
                <MovieGrid
                  movies={movies}
                  toggleWatchList={toggleWatchList}
                  watchList={watchList}
                  genres={genres}
                  ratings={ratings}
                />
              }
            ></Route>
            <Route
              path="/WatchList"
              element={
                <WatchList
                  watchList={watchList}
                  toggleWatchList={toggleWatchList}
                  movies={movies}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
