import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/coiffure.css"

const Coiffure =()=>{
    return(
        <main>
            <div className="titreCoiffure text-center p-3">
                <h1>Retrouvez ici la liste des prestations et leur tarifs pour les soins et l'entretien de vos cheveux !</h1>
            </div>
            <div className="container text-center">
                <div className="row">

                    <div className="col-md-5 col-xl-4 px-3 py-4">
                        <div className="card">
                            <h2 className="card-header">Coupes</h2>
                            <img src="../img/hair_cut.jpg" alt="coiffure" className="card-img"/>
                            <div className="card-body">
                                <h3 className="card-title">Tarifs: xx€</h3>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Coiffure;