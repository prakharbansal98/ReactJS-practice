import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navigation from "./assets/components/Navigation";
import HeroSection from "./assets/components/HeroSection";

function App() {
  return (
    <>
      <Navigation />
      <HeroSection />
    </>
  );
}

export default App;
