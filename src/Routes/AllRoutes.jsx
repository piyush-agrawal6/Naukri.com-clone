import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Admin from "../Pages/Admin/Admin";
import Company from "../Pages/Company/Company";
import Home from "../Pages/Home/Home";
import Jobs from "../Pages/Jobs/Jobs";
import Login from "../Pages/Login/Login";
import Profile from "../Pages/Profile/Profile";
import Register from "../Pages/Register/Register";
const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/jobs" element={<Jobs />}></Route>
        <Route path="/company" element={<Company />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
      <Footer />
    </>
  );
};

export default AllRoutes;
