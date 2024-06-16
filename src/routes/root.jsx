import React from 'react';
import { Outlet, Link } from "react-router-dom";

function Root(props) {
    return (
        <div>
    <header>
  <div className="container">
    <a id="logo" href="#">
      Cartify
    </a>
    <nav>
      <ul>
        <li>
        <Link to={`/`}>Home</Link>
        </li>
        <li>
        <Link to={`/about`}>About</Link>
        </li>
        <li>
        <Link to={`/products`}>Products</Link>
        </li>
        <li>
        <Link to={`/contact`}>Contact</Link>
        </li>
      </ul>
    </nav>
    <div className="actionLinks">
      <a href="#">
        <span className="material-symbols-outlined">favorite</span>
      </a>
      <a href="#">
        <span className="material-symbols-outlined">local_mall</span>
      </a>
    </div>
  </div>
</header>
<Outlet />

        </div>
    );
}

export default Root;