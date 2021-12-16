import React from "react";
import "./Recherche.css";
const Recherche = () => {
  return (
    <div>
      <form>
        <label htmlFor="search">Search</label>
        <input id="search" type="search" pattern=".*\S.*" required />
        <span className="caret" />
      </form>
    </div>
  );
};

export default Recherche;
