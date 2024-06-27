import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/coiffure.css";
import prestations from "../datas.json";

const Coiffure =()=>{

    let dataCoif = prestations.filter(prestation => prestation.category === "Coiffure");

    return(
        <main className="home">
            <h1 className="hello">Bienvenue !</h1>
            <section className="acte container text-center">
                {dataCoif.map(prestation =>(
                    <div key={prestation.id}>
                        <div className="card">
                            <h2 className="card-header text-center">{prestation.acte}</h2>
                            <img src={prestation.image} alt="photo prestation" className="card-img"/>
                        <div className="card-body">
                            <p>Durée: {prestation.temps}</p>
                            <p>Tarif: {prestation.tarif}</p>
                            <Link to='/' className="btn btn-danger">En savoir plus...</Link>
                        </div>
                        </div>
                    </div>
                ))}
            </section>
        </main>
    )
}

export default Coiffure;