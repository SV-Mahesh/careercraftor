import React from "react";
import { BrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import Navbar from "./Navbar";

export default function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={Home} />
      </Routes>
    </BrowserRouter>
  );
}
