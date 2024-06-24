import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/coiffure.css"

const Coiffure =()=>{
    return(
        <main>
            <h1 className="titre text-center p-3">Retrouvez ici la liste des prestations et leur tarifs pour les soins et l'entretien de vos cheveux !</h1>
            <div className="container-fluid text-center">
                <div className="container prestation">

                    <div className="cards col-md-5 col-xl-4 px-3 py-4">
                        <div className="card">
                            <h2 className="card-header">Coupes</h2>
                            <img src="../img/hair_cut.jpg" alt="coiffure" className="card-img"/>
                            <div className="card-body">
                                <Link to='/' className="btn btn-danger">Tarifs</Link>
                            </div>
                        </div>
                    </div>

                    <div className="cards col-md-5 col-xl-4 px-3 py-4">
                        <div className="card">
                            <h2 className="card-header">Couleurs</h2>
                            <img src="../img/red_hair.jpg" alt="couleur" className="card-img" />
                            <div className="card-body">
                                <Link to='' className="btn btn-danger">Tarifs</Link>
                            </div>
                        </div>
                    </div>

                    <div className="cards col-md-5 col-xl-4 px-3 py-4">
                        <div className="card">
                            <h2 className="card-header">Soins</h2>
                            <img src="../img/serum_hair.jpg" alt="soins" className="card-img" />
                            <div className="card-body">
                                <Link to='' className="btn btn-danger">Tarifs</Link>
                            </div>
                        </div>
                    </div>

                    <div className="cards col-md-5 col-xl-4 px-3 py-4">
                        <div className="card">
                            <h2 className="card-header">Coiffure</h2>
                            <img src="../img/hair_dress.jpg" alt="coiffure" className="card-img" />
                            <div className="card-body">
                                <Link to='' className="btn btn-danger">Tarifs</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    )
}

export default Coiffure;