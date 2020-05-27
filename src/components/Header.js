import React from "react";
import { Link } from "react-router-dom";

import Nav from "./Nav";

function Header() {
  return (
    <div className="header">
      <header>
        
          <h1 className="logo">contact: koranagan@gmail.com | 917.742.4400</h1>
        
        <Nav />
      </header>
    </div>
  );
}
export default Header;
