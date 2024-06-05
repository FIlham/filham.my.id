import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Contact />
        <Footer />
    </>
);
