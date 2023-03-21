// import SignUp from './auth/authentication/SignUp';
import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routting from "./components/Router/Router";
import { userContext, userSignUp } from "./context/userContext";

function App() {
  return (
    <userContext.Provider value={userSignUp.signUpUser}>
      <div className="App">
        <Router>
          <Routting />
        </Router>
      </div>
    </userContext.Provider>
  );
}

export default App;
