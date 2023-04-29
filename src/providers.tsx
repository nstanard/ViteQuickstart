import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./appRoutes";

export default function Providers(): JSX.Element {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
