import React, { useState,  } from "react";
import { Link } from "react-router-dom";
import "../styles/styles.css";
import "../styles/outils.css";
import "../styles/components/nav.css";

export default function Nav({ genres, ratings, setGenres, setRatings }) {
  // Tabs for optimised jsx display
  const genreTab = ["All", "Horror", "Drama", "Action", "Fantasy"];
  const ratingTab = ["All", "Good", "Ok", "Bad"];
  //Events function
  //input
  const handleGenres = (e) => {
    setGenres(e.target.value);
  };
  //input
  const handleRatings = (e) => {
    setRatings(e.target.value);
  };

  //ham menu onclick
  const [hamIsActive, setHamIsActive] = useState(false);
  const toggleHam = () => {
    setHamIsActive(!hamIsActive);
  };

  return (
    <section>
      {/* <nav className="nav">
        <div className="nav_ul-container">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/WatchList">Watch List</Link>
            </li>
          </ul>
        </div>
      </nav> */}
      {/* Burger Menu */}
      <nav className="burger-icon_container">
        <div
          onClick={toggleHam}
          className={`burger-icon ${hamIsActive ? "active" : ""}`}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
      <div className={`off-screen-menu ${hamIsActive ? "active" : ""}`}>
        <ul className="menu">
          <li onClick={toggleHam}>
            <Link to="/">Home</Link>
          </li>
          <li  onClick={toggleHam}>
            <Link to="/WatchList">Watch list</Link>
          </li>
          <li>
            <input
              type="checkbox"
              id="dropdown-toggle-genre"
              className="dropdown-toggle-genre"
            />
            <label htmlFor="dropdown-toggle-genre" className="dropdown-label">
              <span>Genre</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="icon"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
            </label>
            <ul className="dropdown dropdown-genre">
              {genreTab.map((genre) => (
                <li>
                  <button
                    onClick={() => {
                      setGenres(genre);
                      toggleHam();
                    }}
                  >
                    {genre}
                  </button>
                </li>
              ))}
            </ul>
          </li>
          <li>
            <input
              type="checkbox"
              id="dropdown-toggle-rating"
              className="dropdown-toggle-rating"
            />
            <label htmlFor="dropdown-toggle-rating" className="dropdown-label">
              <span>Rating</span>
        
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="icon"
                >
                  <path d="M7 10l5 5 5-5z" />
                </svg>
        
            </label>
            <ul className="dropdown dropdown-rating">
              {ratingTab.map((rating) => (
                <li>
                  <button
                    onClick={() => {
                      setRatings(rating);
                      toggleHam();
                    }}
                  >
                    {rating}
                  </button>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
      {/* Filter bar */}
      {/* <div className="filter-bar">
        <div className="filter-slot">
          <label>Genre</label>
          <select
            className="filter-dropdown"
            value={genres}
            onChange={handleGenres}
          >
            <option value="All">All</option>
            <option value="Horror">Horror</option>
            <option value="Drama">Drama</option>
            <option value="Action">Action</option>
            <option value="Fantasy">Fantasy</option>
          </select>
        </div>
        <div className="filter-slot">
          <label>Rating</label>
          <select
            className="filter-dropdown"
            value={ratings}
            onChange={handleRatings}
          >
            <option value="All">All</option>
            <option value="Good">Good</option>
            <option value="Ok">Ok</option>
            <option value="Bad">Bad</option>
          </select>
        </div>
      </div> */}
    </section>
  );
}
