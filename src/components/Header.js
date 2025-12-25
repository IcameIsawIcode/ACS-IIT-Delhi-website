import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <a href="#"><img src="acs-logo-placeholder.png" alt="ACS Logo" height="40" /></a>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Events</a></li>
          <li><a href="#">Programming</a></li>
          <li><a href="#">Speakers</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <input type="search" placeholder="Search" />
      </nav>
    </header>
  );
}

export default Header;
