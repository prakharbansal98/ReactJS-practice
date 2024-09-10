import React from "react";

function Navigation() {
  return (
    <div className="nav">
      <div className="logo">
        <img src="images/brand_logo.png"></img>
      </div>
      <div>
        <ul className="nav-menus">
          <li>MENU</li>
          <li>LOCATION</li>
          <li>ABOUT</li>
          <li>CONTACT</li>
        </ul>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}

export default Navigation;
