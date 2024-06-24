import React from "react";
import { Link } from "react-router-dom";
import "../assets/style/coiffure.css"

const Wellness = () =>{
    return(
        <main>
            <h1 className="titre text-center p-3">Offrez à votre peau une renaissance <span className="red">éclatante</span> 
            et un voyage <span className="red">sensoriel</span> !</h1>
            <div className="container-fluid text-center">
                <div className="container prestation">

                <div className="cards col-md-5 col-xl-4 px-3 py-4">
                    <div className="card">
                        <h2 className="card-header">Massage</h2>
                        <img src="../img/massage.jpg" alt="coiffure" className="card-img"/>
                        <div className="card-body">
                            <Link to='/' className="btn btn-danger">Tarifs</Link>
                        </div>
                    </div>
                </div>

                <div className="cards col-md-5 col-xl-4 px-3 py-4">
                    <div className="card">
                        <h2 className="card-header">Gommage</h2>
                        <img src="../img/massage.jpg" alt="coiffure" className="card-img"/>
                        <div className="card-body">
                            <Link to='/' className="btn btn-danger">Tarifs</Link>
                        </div>
                    </div>
                </div>

                <div className="cards col-md-5 col-xl-4 px-3 py-4">
                    <div className="card">
                        <h2 className="card-header">Modellage</h2>
                        <img src="../img/massage.jpg" alt="coiffure" className="card-img"/>
                        <div className="card-body">
                            <Link to='/' className="btn btn-danger">Tarifs</Link>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </main>
    )
}

export default Wellness;