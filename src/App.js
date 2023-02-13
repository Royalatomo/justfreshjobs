import "./css/App.css";
import Home from "./Pages/home/Main";
import Consultants_Info from "./Pages/consultant-info/Main";
import Contact_Us from "./Pages/contact-us/Main";
import Privacy from "./Pages/privacy/Main";
import TermsCondition from "./Pages/terms-condition/Main"
import Searching from "./Pages/searching/Main";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Consultants_Info /> */}
      {/* <Contact_Us /> */}
      {/* <Privacy /> */}
      {/* <TermsCondition /> */}
      <Searching />
    </div>
  );
}

export default App;
