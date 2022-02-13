import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Components/Layout/Footer";
import Navbar from "./Components/Layout/Navbar";
import About from "./Components/Pages/About";
import Coming from "./Components/Pages/Coming";
import Home from "./Components/Pages/Home";

function App() {
  return (
    <div>
      {/* <Routes /> */}
      <BrowserRouter>
        <React.Fragment>
          {/* Preloader */}
          {/* <div className="spinner-wrapper">
          <div className="spinner">
            <div className="bounce1" />
            <div className="bounce2" />
            <div className="bounce3" />
          </div>
        </div> */}
          {/* end of preloader */}
          {/* <Navbar /> */}
          {/* end of navigation */}
          {/* Header */}
          <Navbar />
          {/* <Coming /> */}
          <Routes>
            <Route path='/about' element={<About />} />
          </Routes>
          <Footer />
        </React.Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
