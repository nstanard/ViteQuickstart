import React, { type ReactNode } from "react";
import { Routes, Route } from "react-router-dom";

export default function AppRoutes({
  children = null,
}: {
  children?: ReactNode;
}) {
  return (
    <Routes>
      <Route path="/" element={<h1>Hi!</h1>} />
      <Route path="*" element={<>Page not found.</>} />
      {children}
    </Routes>
  );
}
