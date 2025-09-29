import { useState } from "react";
import "./App.css";

//components
import SignUpForm from "./components/SignUpForm";
import Authenticate from "./components/Authenticate";

function App() {
  const [token, setToken] = useState(null);
  return (
    <div >
    <h1>Block 27 Workshop</h1>
      <SignUpForm setToken={setToken} />
      <Authenticate token={token} />
    </div>
  );
}

export default App;
