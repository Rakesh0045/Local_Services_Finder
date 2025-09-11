import React from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import Home from "./Home";


function App() {

  return (
    
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
