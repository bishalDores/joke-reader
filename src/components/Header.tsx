import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand m-auto" to="/">
            Joke Reader
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
