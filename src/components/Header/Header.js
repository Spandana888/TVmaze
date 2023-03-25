import React from 'react';
import './Header.css';
import { BiSearch } from "react-icons/bi";

const Header = ({ filterShow }) => {
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
              onChange={(e) => filterShow(e.target.value)}
            />
          </form>
        </div>
        <div className="filter-container">
          <form>
            <select>
              <option>Action</option>
              <option>Adventure</option>
              <option>Drama</option>
              <option>Crime</option>
              <option>Fantasy</option>
              <option>Horror</option>
              <option>Mystery</option>
              <option>Music</option>
              <option>Romance</option>
              <option>Science-Fiction</option>
              <option>Supernatural</option>
              <option>Thriller</option>
            </select>
          </form>
        </div>
        <div className="rating-container">
          <form>
            <select>
              <option>Rating 1</option>
              <option>Rating 2</option>
              <option>Rating 3</option>
              <option>Rating 4</option>
              <option>Rating 5</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}

export default Header