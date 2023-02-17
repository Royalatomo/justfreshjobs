import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./Pages/home/Main";
import Consultants_Info from "./Pages/consultant-info/Main";
import Contact_Us from "./Pages/contact-us/Main";
import Privacy from "./Pages/privacy/Main";
import TermsCondition from "./Pages/terms-condition/Main";
import Searching from "./Pages/searching/Main";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Consultant" element={<Consultants_Info />} />
          <Route path="/contact-us" element={<Contact_Us />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<TermsCondition />} />
          <Route path="/search" element={<Searching />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
