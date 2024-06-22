import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import React from "react";
import Header from "./pages/Header";


function App(){
  return(
    <div className="App">
      <Header/>
    </div>
  )
}

export default App;
