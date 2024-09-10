import { useState } from "react";

import "./App.css";
import Navbar from "./assets/components/Navbar/Navbar";
import ContactHeader from "./assets/components/ContactHeader/ContactHeader";
import ContactForm from "./assets/components/ContactForm/ContactForm";

function App() {
  return (
    <div>
      <Navbar />
      <ContactHeader />

      <ContactForm />
    </div>
  );
}

export default App;
