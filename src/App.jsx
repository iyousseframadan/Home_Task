import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import Categories from "./Components/Categories";
import Features from "./Components/Features";
import Packages from "./Components/Packages";
import Testimonials from "./Components/Testimonials";
import Partners from "./Components/Partners";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="">
      {" "}
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <Features />
        <Packages />
        <Testimonials />
        <Partners />
      </main>
      <Footer />
    </div>
  );
}

export default App;
