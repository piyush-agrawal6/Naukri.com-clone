import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose, MdOutlineLogout } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const user = "admin";
  const Login = false;

  const styleA = { left: "-100%" };
  const styleB = { left: "0%" };
  return (
    <div className="container">
      <div className="row v-center">
        <div className="nav-item item-left">
          <div className="logo">
            <Link to="/">
              <img src="./assets/logo.png" alt="logo" />
            </Link>
          </div>
        </div>
        <div className="nav-item item-center">
          <nav className="menu" style={click ? styleB : styleA}>
            <ul className="menu-main">
              <p className="mobItem">
                <Link>LOOK AT</Link>
                <MdClose className="cross" onClick={handleClick} />
              </p>
              <li className="menuItem" onClick={handleClick}>
                <Link to="/jobs">Jobs</Link>
              </li>
              <li className="menuItem" onClick={handleClick}>
                <Link to="/company">Companies</Link>
              </li>
              {/* <li className="menuItem" onClick={handleClick}>
                <Link>Creators</Link>
              </li> */}
              <p className="mobItem" onClick={handleClick}>
                <Link to="/register">Login / Signup</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/admin">Admin</Link>
              </p>
              <p className="mobItem" onClick={handleClick}>
                <Link to="/profile">Profile</Link>
              </p>
            </ul>
          </nav>
        </div>
        <div className="nav-item item-right">
          <div className="navSearch">
            <input type="text" placeholder="Search for jobs here" />
            <BiSearch className="searchIcon" />
          </div>
          <div className="navIcons hide">
            <BiSearch className="sideIcons" />
          </div>
          {user === "admin" ? (
            <div className="navIcons display">
              <Link to="/admin">
                <RiAdminLine className="sideIcons" />
                <p>Admin</p>
              </Link>
            </div>
          ) : null}
          {Login ? (
            <div className="navIcons">
              <Link to="/profile">
                <CgProfile className="sideIcons" />
                <p className="display">Profile</p>
              </Link>
            </div>
          ) : (
            <div className="navIcons">
              <Link to="/register">
                <CgProfile className="sideIcons" />
                <p className="display">Login</p>
              </Link>
            </div>
          )}
          <div className="navIcons">
            <Link to="/register">
              <MdOutlineLogout className="sideIcons" />
              <p className="display">Logout</p>
            </Link>
          </div>
          <div className="navIcons hamburger">
            <RxHamburgerMenu className="sideIcons" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
