import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Coiffure from "./pages/Coiffure";
import Wellness from "./pages/Wellness";
import Footer from "./pages/Footer";



function App(){
  return(
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/coiffure' element= {<Coiffure/>}/>
          <Route path='/wellness' element= {<Wellness/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App;
