import React from 'react';
import {Link, withRouter} from 'react-router-dom';

function Navbar(props) {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo center">To-Do List</a>
        <ul id="nav-mobile" className="right">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About the app</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default withRouter(Navbar);
