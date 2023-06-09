import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';

const Header = () => {
  const logout = event => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <header className=".bg-info mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>CookBuddy</h1>
        </Link>
        <nav className="text-center">
          {Auth.loggedIn() ? (
            <>
            <Link to="/profile">RECIPES</Link>
            <Link to="/addrecipe">ADD A RECIPE</Link>
           <Link to="/search">SEARCH RECIPES</Link>
              <a href="/" onClick={logout}>
                LOGOUT
              </a>
            </>
          ) : (
            <>
              <Link to="/login">LOGIN</Link>
              <Link to="/signup">SIGNUP</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;