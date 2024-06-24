import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/home.css";

const Home =() =>{
    return(
        <div className="home">
            <div className="hello">
                <h1>Bienvenue !</h1>
            </div>
            <div className="container">
                <section className="leftSide">
                    <div className="carousel slide" id="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item">
                                <h1 style={{color:'#D93654'}} className="text-center">Mes réalisations</h1>
                                <img src="../img/slide0.png" alt="cheveux" />
                            </div>
                            <div className="carousel-item active">
                                <h1 style={{color:'#D93654'}} className="text-center">Mes réalisations</h1>
                                <img src="../img/ongles.jpg" alt="ongles"/>
                            </div>
                            <div className="carousel-item">
                                <h1 style={{color:'#D93654'}} className="text-center">Mes réalisations</h1>
                                <img src="../img/sourcils.jpg" alt="sourcils"/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carousel" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden='true'></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carousel" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden='true'></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </section>
                <section className="rightSide">
                    <h1>Valérie </h1>
                    <h2>Professionnelle de la coiffure depuis <span>x années</span>, vous accueille dans son salon 
                    du "horraires d'ouvertures".
                    </h2>
                    <h2>Venez profiter, le temps d'une prestation, d'un <span className="red">cadre 
                        agréable et chaleureux.</span></h2>
                    <h3>A très vite, chez <span className="red"><strong>VE</strong> </span>Coiffure et esthétique  !</h3>

                </section>
            </div>
            <article className="text-center pt-5">
                <h1><Link to='/'>Contactez-moi</Link> dès maintenant</h1>
                <p>Pour un devis personnalisé ou une prise de rendez-vous</p>
                <p>Tout rendez-vous non annulé au moins 24 à 48 heures à l'avance ne pourra être reporté.</p>
            </article>
        </div>
    )
}

export default Home;