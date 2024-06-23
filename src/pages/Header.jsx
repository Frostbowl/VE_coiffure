import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/header.css";

const Header =() =>{
    return(
        <div className="top">
            <nav className="navbar navbar-expand-lg ">
                <div className="text-logo ">VE</div>
                <Link to="/" className="navbar-brand"><img src="../img/noun-hand-drawn-wreath-2650151.svg" alt="VE Coiffure" id="logo"/></Link>
                <div className="slogan">
                    <h1>Coiffure</h1>
                    <h2>&</h2>
                    <h1>Esthétique</h1>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse headBar" id="navbarSupportedContent">
                    <div className="navigation">
                        <Link to='/' className="nav-link" aria-current='page'>Accueil</Link>
                        <Link to='/' className="nav-link" aria-current='page'>Coiffure</Link>
                        <Link to='/' className="nav-link" aria-current='page'>Bien-être</Link>
                        <Link to='/' className="nav-link" aria-current='page'>Esthétique</Link>
                        <Link to='/' className="nav-link" aria-current='page'>Contact</Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header;
