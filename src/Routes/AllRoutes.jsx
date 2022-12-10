import React from "react";
import { Route, Routes } from "react-router-dom";
const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<h1>Routes</h1>}></Route>
      </Routes>
    </>
  );
};

export default AllRoutes;
