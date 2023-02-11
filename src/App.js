import "./css/App.css";
import Home from "./Pages/home/Main";
import Consultants_Info from "./Pages/consultant-info/Main.js";
import Contact_Us from "./Pages/contact-us/Main.js";
import Privacy from "./Pages/privacy/Main.js";
import TermsCondition from "./Pages/terms-condition/Main.js"

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <Consultants_Info /> */}
      <Contact_Us />
      {/* <Privacy /> */}
      {/* <TermsCondition /> */}
    </div>
  );
}

export default App;
