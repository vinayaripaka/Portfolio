import React from "react";
import "./index.css";
import Home from "./routes/home";
import Project from "./routes/project";
import Contact from "./routes/contact";
import About from "./routes/about";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/project' element={<Project />} />
      </Routes>
    </>
  );
}

export default App;
