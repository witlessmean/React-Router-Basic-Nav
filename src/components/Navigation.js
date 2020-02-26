import React from 'react';
import {Link} from 'react-router-dom'


//Difference between a tag and Link tag? a tag uses server side routing which refreshes the entire page, while the Link tag uses client side routing and renders itself within the page.

const Navigation = () => {
  return (
    <div>
      <div className="App">
        <h1>React Router Mini</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/About">About</Link>
        </div>
        <div>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
