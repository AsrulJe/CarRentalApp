import React, { useState } from "react";
import "../src/dist/styles.css";
import About from "./Pages/About";
import Home from "./Pages/Home";
import Navbar from "../src/components/Navbar";
import { Route, Routes } from "react-router-dom";
import Models from "./Pages/Models";
import TestimonialsPage from "./Pages/TestimonialsPage";
import Team from "./Pages/Team";
import Contact from "./Pages/Contact";
import Sidebar from "./components/Sidebar";
import CarDetails from './components/CarDetails';

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Navbar />
      <div className="app-layout">
        <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
        <div
          className="main-content"
          style={{ marginLeft: showSidebar ? 200 : 0 }}
        >
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="models" element={<Models />} />
            <Route path="testimonials" element={<TestimonialsPage />} />
            <Route path="team" element={<Team />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact" element={<Contact />} />
            <Route path="/car-details" element={<CarDetails />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
