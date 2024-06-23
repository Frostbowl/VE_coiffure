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
                        <img src="../img/photoporo.jpg" alt="Valérie Esther" className="profilPic" />
                    </div>
                </section>
                <section className="rightSide">
                    <h1>Valérie </h1>
                    <h2>Professionnelle de la coiffure depuis x années, vous accueille dans son salon du "horraires d'ouvertures"</h2>
                    <h2>Venez profiter, le temps d'une prestation, d'un cadre agréable et chaleureux.</h2>
                    <h3>A très vite, chez VE Coiffure et esthétique !</h3>

                </section>
            </div>
        </div>
    )
}

export default Home;