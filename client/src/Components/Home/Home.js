import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Ariane from '../Ariane/Ariane';
import Category from '../Category/Category';
import './Home.css';


function Home (){
    return (
        <div>
            <NavBar/>
            <div className="container-fluid">
                <div className="row">
                    <img className="img-fluid" src="./images/banner.jpg" />
                </div>
            </div>
            <Ariane/>
            <div className="container">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>Catégories de produits</h2>
                    </div>
                </div>
               <Category/>
            </div>
            <div className="container-fluid mt-5">
                <div className="row">
                    <img className="img-fluid" src="./images/montage-banner.jpg" />
                </div>
            </div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col text-center">
                        <h2>Meilleures ventes</h2>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col">
                        <div className="card">
                            <img src="./images/products/msi-rtx.jpg" className="card-img-top img-thumbnail" />
                            <div className="card-body text-center">
                                <h5 className="card-title">MSI RTX 2060 super Gaming X</h5>
                                <a href="#" className="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="./images/products/coolermaster.jpg" className="card-img-top img-thumbnail" />
                            <div className="card-body text-center">
                                <h5 className="card-title">Cooler Master MasterBox E500L</h5>
                                <a href="#" className="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="./images/products/fury.jpg" className="card-img-top img-thumbnail" />
                            <div className="card-body text-center">
                                <h5 className="card-title">HyperX Fury DDR4 2 x 8 Go</h5>
                                <a href="#" className="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card">
                            <img src="./images/products/crucial-ssd.jpg" className="card-img-top img-thumbnail" />
                            <div className="card-body text-center">
                                <h5 className="card-title">SSD Crucial MX500 - 500 GO</h5>
                                <a href="#" className="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Home;

