import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import Coiffure from "./pages/Coiffure";
import Wellness from "./pages/Wellness";
import Footer from "./pages/Footer";
import Contact from "./pages/Contact";
import Mentions from "./pages/Mention";
import Esthetique from "./pages/Esthetique";
import 'bootstrap/dist/css/bootstrap.min.css';




function App(){
  return(
    <div className="App">
      <Header/>
        <Routes>
          <Route path='/' element= {<Home/>}/>
          <Route path='/coiffure' element= {<Coiffure/>}/>
          <Route path='/esthetique' element={<Esthetique/>}/>
          <Route path='/wellness' element= {<Wellness/>}/>
          <Route path='/contact' element= {<Contact/>}/>
          <Route path='/mention' element={<Mentions/>}/>
        </Routes>
      <Footer/>
    </div>
  )
}

export default App;
