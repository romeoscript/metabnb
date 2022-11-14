import React, { useState } from "react";
import "../Assets/css/navbar.scss";
import logo from "../Assets/images/Group.png";
import { Link } from "react-router-dom";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

const NavBar = ({ onclick }) => {
  const [navToggle, setNavToggle] = useState(false);
  const toggle = () => {
    setNavToggle(!navToggle);
  };
  return (
    <div className="navbar__container">
      <div className="navbar__logo">
        <img src={logo} alt="logo" />
      </div>
      <ul className="nav__links">
        <Link to="/">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="place">
          {" "}
          <li>Place to stay</li>
        </Link>
        <li>NFTs</li>
        <li>Community</li>
      </ul>
      <div className="navbar__connet-wallet" onClick={onclick}>
        Connect wallet
      </div>
     <div>
     {navToggle ? (
         <AiOutlineClose className="menu" onClick={toggle} />
        
      ) : (
        <HiOutlineMenuAlt3 className="menu" onClick={toggle} />
      )}
     </div>

      {navToggle && (
        <ul className="responsive__nav">
          <Link to="/" onClick={toggle}>
            {" "}
            <li>Home</li>
          </Link>
          <Link to="place" onClick={toggle}>
            {" "}
            <li>Place to stay</li>
          </Link>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
      )}
    </div>
  );
};

export default NavBar;
