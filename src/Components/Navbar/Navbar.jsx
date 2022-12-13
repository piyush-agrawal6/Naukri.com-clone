import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose, MdOutlineNotificationsNone } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };
  const user = "admin";
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
                {/* <div className="subMenu megaMenu menuColumn">
                  <div className="menuList">
                    <ul>
                      <li>
                        <Link>Kurtas & Suits</Link>
                      </li>
                      <li>
                        <Link>Sarees</Link>
                      </li>
                      <li>
                        <Link>Palazzos</Link>
                      </li>
                      <li>
                        <Link>Jackets</Link>
                      </li>
                      <li>
                        <Link>Jeans</Link>
                      </li>
                      <li>
                        <Link>Jumpsuits</Link>
                      </li>
                    </ul>
                  </div>
                </div> */}
              </li>
              <li className="menuItem" onClick={handleClick}>
                <Link to="/company">Companies</Link>
              </li>
              <li className="menuItem" onClick={handleClick}>
                <Link>Services</Link>
              </li>
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
          <div className="navIcons">
            <Link to="/profile">
              <CgProfile className="sideIcons" />
              <p>Profile</p>
            </Link>
          </div>
          <div className="navIcons">
            <Link>
              <MdOutlineNotificationsNone className="sideIcons" />
              <span>1</span>
              <p className="display">Notification</p>
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