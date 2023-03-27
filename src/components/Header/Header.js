import React from 'react';
import './Header.css';

const Header = ({ searchShow, filterGenre }) => {
  const genreList = [
    "All",
    "Action",
    "Adventure",
    "Drama",
    "Crime",
    "Fantasy",
    "Horror",
    "Mystery",
    "Music",
    "Romance",
    "Science-Fiction",
    "Supernatural",
    "Thriller",
  ];

  const onFilterValueChanged = (e) => {
    e.preventDefault();
    filterGenre(e.target.value)
  };

  return (
    <>
      <h1>TVmaze</h1>
      <div className="header-container">
        <div className="search-container">
          <form>
            <input
              type="text"
              placeholder="Search"
              aria-label="Search"
              id="search-text"
              name="search"
              onChange={(e) => searchShow(e.target.value)}
            />
          </form>
        </div>
        <div className="filter-container">
          <select onChange={onFilterValueChanged} title="All" name="genre-filter">
            {genreList.map((list) => {
              return <option value={list} key={list}>{list}</option>;
            })}
          </select>
        </div>
      </div>
    </>
  );
};

export default Header