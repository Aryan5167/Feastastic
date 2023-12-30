import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import RecipePopup from "./components/RecipePopup/RecipePopup";


function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route path="home" element={<Home />}></Route>
          <Route path="recipes/:recipeId" element={<RecipePopup />}></Route>

        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App