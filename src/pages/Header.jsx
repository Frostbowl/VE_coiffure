import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/header.css";

const Header =() =>{
    return(
        <div className="top">
            <nav className="navbar navbar-expand-lg ">
                <Link to="/" className="navbar-brand">
                    <div className="logo-container">
                        <div className="text-logo ">VE</div>
                        <img src="../img/laurrier.svg" alt="VE Coiffure" id="logo"/>
                    </div>
                </Link>
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
                        <Link to='/' className="nav-link" aria-current='page'><img src="../img/home.svg" alt="home" />Accueil</Link>
                        <Link to='/coiffure' className="nav-link" aria-current='page'><img src="../img/hair.svg" alt="hairdress" />Coiffure</Link>
                        <Link to='/' className="nav-link" aria-current='page'><img src="../img/zen.svg" alt="wellness" />Bien-être</Link>
                        <Link to='/' className="nav-link" aria-current='page'><img src="../img/eye.svg" alt="beauty" />Esthétique</Link>
                        <Link to='/' className="nav-link" aria-current='page'><img src="../img/contact.svg" alt="contact" />Contact</Link>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Header;
