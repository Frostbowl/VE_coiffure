import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/header.css";

const Header =() =>{
    return(
            <nav className="navbar navbar-expand-lg ">
                <div className="logo text-center">
                        <h1 id="ve">VE</h1>
                        <img src="../img/logo4.jpg" alt="VE Coiffure" id="logo" className="logoimg"/>
                        <div className="slogan">
                            <h1>Coiffure</h1>
                            <h2>&</h2>
                            <h1>Esthétique</h1>
                        </div>
                </div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse headBar" id="navbarSupportedContent">
                    <div className="navigation">
                        <Link to='/' className="nav-link" aria-current='page'><img src="../img/home.svg" alt="home" />Accueil</Link>
                        <Link to='/coiffure' className="nav-link" aria-current='page'><img src="../img/hair.svg" alt="hairdress" />Coiffure</Link>
                        <Link to='/wellness' className="nav-link" aria-current='page'><img src="../img/zen.svg" alt="wellness" />Bien-être</Link>
                        <Link to='/' className="nav-link" aria-current='page'>
                            <div className="column">
                                <img src="../img/manucure.svg" alt="manicure" />
                                <img src="../img/eye.svg" alt="beauty"/>
                            </div>Esthétique
                        </Link>
                        <Link to='/contact' className="nav-link" aria-current='page'><img src="../img/contact.svg" alt="contact" />Contact</Link>
                    </div>
                </div>
            </nav>
    )
}

export default Header;
