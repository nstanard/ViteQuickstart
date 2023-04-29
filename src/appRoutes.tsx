import React, { type ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "src/pages/home";
import AboutUs from "src/pages/aboutUs";
import Blog from "src/pages/blog";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<>Page not found.</>} />
    </Routes>
  );
}
