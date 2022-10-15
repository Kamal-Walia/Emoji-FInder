import React from "react";

import Heading from "./Heading";

import "../assets/css/header.css";

export default function Search({ search, handleChange }) {
  return (
    <div className="header">
      <Heading />
      <div className="search">
        <form>
          <input
            type="text"
            value={search}
            id="searchbar"
            onChange={handleChange}
            autoComplete="off"
          />
        </form>
      </div>
    </div>
  );
}
