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
                    <img src="./images/categories/carte-graphique.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Carte graphique</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/categories/alimentation.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Alimentation</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/categories/processeur.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Processeur</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/categories/boitier.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Boitier PC</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/categories/ram.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Mémoires</div>
                    </div>
                </div>
            </div>
            <div className="row mt-5">
                <div className="col">
                    <img src="./images/categories/ssd.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Stockage</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/categories/watercooling.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Refroidissement</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/categories/carte-mère.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Carte mère</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/categories/carte-son.jpg" className="img-thumbnail" />
                    <div class="overlay img-thumbnail">
                        <div class="text">Carte son</div>
                    </div>
                </div>
                <div className="col">
                    <img src="./images/categories/kit-upgrade.jpg" className="img-thumbnail" />
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