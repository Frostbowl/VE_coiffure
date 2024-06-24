import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/home.css";

const Home =() =>{
    return(
        <div className="home">
            <div className="container">
                <section className="leftSide">
                    <div className="card">
                        <div className="card-header">
                            <h2>Valérie Esther</h2>
                        </div>
                        <img src="../img/photoporo.jpg" alt="Valérie Esther" className="card-img profilPic" />
                    </div>
                </section>
                <section className="rightSide">
                    <h1>Valérie </h1>
                    <h2>Professionnelle de la coiffure depuis <span className="red">x années</span>, vous accueille dans son salon 
                    du <span className="red">"horraires d'ouvertures"</span>.
                    </h2>
                    <h2>Venez profiter, le temps d'une prestation, d'un cadre 
                        <span className="nude"> agréable </span> et <span className="nude">chaleureux</span> chaleureux.</h2>
                    <h3>A très vite, chez <span className="red">VE Coiffure et esthétique</span>  !</h3>

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