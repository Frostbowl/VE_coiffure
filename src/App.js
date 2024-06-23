import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";


function App(){
  return(
    <div className="App">
      <Header/>
      <Routes>
        <Route path='/' element= {<Home/>}/>
      </Routes>
    </div>
  )
}

export default App;
