import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";


function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App