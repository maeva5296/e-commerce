import React from "react";
import './Home.css';


function Home() {
    return (
        <div>
        <div className="container-fluid">
            <div className="row">
                <img className="img-fluid" src="./images/banner.jpg" />
            </div>
        </div>
        <div className="container">
            <div className="row mt-5">
                <div className="col text-center">
                    <h2>Catégories de produits</h2>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <img src="./images/carte-graphique.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Carte graphique</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/alimentation.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Alimentation</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/processeur.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Processeur</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/boitier.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Boitier PC</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/ram.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Mémoires</div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <img src="./images/ssd.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Stockage</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/watercooling.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Refroidissement</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/carte-mère.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Carte mère</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/carte-son.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Carte son</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/kit-upgrade.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Kit d'upgrade</div>
                    </div>
                </div>
            </div>
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
                    <div class="card">
                        <img src="./images/products/msi-rtx.jpg" class="card-img-top img-thumbnail" />
                        <div class="card-body text-center">
                            <h5 class="card-title">MSI RTX 2060 super Gaming X</h5>
                            <a href="#" class="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card">
                        <img src="./images/products/coolermaster.jpg" class="card-img-top img-thumbnail" />
                        <div class="card-body text-center">
                            <h5 class="card-title">Cooler Master MasterBox E500L</h5>
                            <a href="#" class="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card">
                        <img src="./images/products/fury.jpg" class="card-img-top img-thumbnail" />
                        <div class="card-body text-center">
                            <h5 class="card-title">HyperX Fury DDR4 2 x 8 Go</h5>
                            <a href="#" class="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div class="card">
                        <img src="./images/products/crucial-ssd.jpg" class="card-img-top img-thumbnail" />
                        <div class="card-body text-center">
                            <h5 class="card-title">SSD Crucial MX500 - 500 GO</h5>
                            <a href="#" class="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Home;