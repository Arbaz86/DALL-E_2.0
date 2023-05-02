import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, CreatePost } from "../pages/index";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-post" element={<CreatePost />} />
    </Routes>
  );
};

export default AllRoutes;
