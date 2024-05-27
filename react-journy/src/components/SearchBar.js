import React from "react";
import "./SearchBar.css";
export default function SearchBar() {
  return (
    <div className="input-wrapper">
      <i class="fa-solid fa-magnifying-glass" id="search-icon"></i>
      <input placeholder="Enter your destination..."></input>
    </div>
  );
}
