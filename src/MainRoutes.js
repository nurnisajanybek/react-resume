import React from "react";
import { Route, Routes } from "react-router-dom";
import Awards from "./components/Awards/Awards";
import Education from "./components/Education/Education";
import Home from "./components/Home/Home";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/edu" element={<Education />}></Route>
        <Route path="/awards" element={<Awards />}></Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
