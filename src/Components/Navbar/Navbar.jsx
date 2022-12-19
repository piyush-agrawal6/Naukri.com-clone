import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { BiSearch } from "react-icons/bi";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose, MdOutlineLogout } from "react-icons/md";
import { RiAdminLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../Redux/Auth/actionsRegister";
import image from "./logo.png";
const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
  };

  let dispatch = useDispatch();
  let { isLogin, userRole } = useSelector((store) => store.auth);

  const styleA = { left: "-100%" };
  const styleB = { left: "0%" };
  return (
    <div className="container">
      <div className="row v-center">
        <div className="nav-item item-left">
          <div className="logo">
            <Link to="/">
              <img src={image} alt="logo" />
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
          {userRole && isLogin ? (
            <div className="navIcons display">
              <Link to="/admin">
                <RiAdminLine className="sideIcons" />
                <p>Admin</p>
              </Link>
            </div>
          ) : null}
          {isLogin ? (
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
          {isLogin ? (
            <div className="navIcons" onClick={() => dispatch(logoutUser())}>
              <Link to="">
                <MdOutlineLogout className="sideIcons" />
                <p className="display">Logout</p>
              </Link>
            </div>
          ) : null}
          <div className="navIcons hamburger">
            <RxHamburgerMenu className="sideIcons" onClick={handleClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
