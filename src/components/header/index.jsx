import React from "react";
import { Link } from "react-router-dom";
import "./styles.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="headerLeft">
        <Link to="/">
          {" "}
          <img
            className="header__icon"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png"
            alt=""
          />{" "}
        </Link>
        <Link
          to="/movies/popular"
          className="header__icon"
          style={{ textDecoration: "none" }}
        >
          <span> Popular</span>
        </Link>
        <Link
          to="/movies/top_rated"
          className="header__icon"
          style={{ textDecoration: "none" }}
        >
          <span> Top Rated</span>
        </Link>
        <Link
          to="/movies/upcoming"
          className="header__icon"
          style={{ textDecoration: "none" }}
        >
          <span> UpComing</span>
        </Link>
      </div>
    </div>
  );
};

export default Header;
