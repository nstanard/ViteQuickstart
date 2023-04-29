import React, { type ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "src/pages/home";
import AboutUs from "src/pages/aboutUs";
import Blog from "src/pages/blog";
import PageNotFound from "./pages/notFound";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}
