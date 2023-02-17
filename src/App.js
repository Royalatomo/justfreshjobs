import { Routes, Route } from "react-router-dom";
import "./css/App.css";
import Home from "./Pages/home/Main";
import ConsultantsInfo from "./Pages/consultant-info/Main";
import ContactUs from "./Pages/contact-us/Main";
import Privacy from "./Pages/privacy/Main";
import TermsCondition from "./Pages/terms-condition/Main";
import Searching from "./Pages/searching/Main";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";
import Login from "./Pages/login/Main";
import Register from "./Pages/register/Main";

function App() {

  return (
    <>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Consultant" element={<ConsultantsInfo />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms-conditions" element={<TermsCondition />} />
          <Route path="/search" element={<Searching />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
