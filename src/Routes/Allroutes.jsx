import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/HomePage/Homepage";
import AboutUs from "../Pages/AboutUs/AboutUs";

const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about-us" element={<AboutUs />} />
    </Routes>
  );
};

export default Allroutes;
