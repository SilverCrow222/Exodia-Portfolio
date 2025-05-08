import "./App.css";
import React, { useState } from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import CustomCursor from "./Components/Cursor";

function App() {
  return (
    <div className="App">
      <CustomCursor />

      <Nav />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
