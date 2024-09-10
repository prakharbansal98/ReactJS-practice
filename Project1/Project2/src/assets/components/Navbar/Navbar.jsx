import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className={`${styles.navigation} container`}>
      <div className="logo">
        <img src="/images/Frame 2 1.png"></img>
      </div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
