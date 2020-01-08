import React from "react";
import "./Article.css";

function Article() {
    return (
        <div id="form" className="container">
            <div className="row justify-content-center">
                <div class="card-group">
                    <div className="card">
                        <img src="./images/radeon.jpg" className="card-img-top" alt="radeon"/>
                        <div className="card-body">
                        <h5 className="card-title">Asus Radeon RX 580</h5>
                        <p className="card-text">La nouvelle gamme RX série 450 Asus affiche un rapport performances prix hors normes pour le plus grand plaisir des joueurs PC !</p>
                        <div id="article">
                        <h5 class="text-center font-weight-bold" id="price">179€<small className="font-weight-bold">95</small></h5>
                        <button type="submit" className="btn btn-success">Ajouter au panier <i className="fas fa-shopping-cart"></i></button>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/geforce.jpg" className="card-img-top" alt="geforce"/>
                        <div className="card-body">
                        <h5 className="card-title">Gigabyte GeForce GTX</h5>
                        <p className="card-text">Si vous cherchez à monter votre nouveau PC gamer, optez pour la Gigabyte GeForce GTX 1660 OC !</p>
                        <div id="article">
                        <h5 class="text-center font-weight-bold" id="price">259€<small className="font-weight-bold">94</small></h5>
                        <button type="submit" className="btn btn-success">Ajouter au panier <i className="fas fa-shopping-cart"></i></button>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/msi.jpg" className="card-img-top" alt="msi"/>
                        <div className="card-body">
                        <h5 className="card-title">MSI GeForce RTX 2060</h5>
                        <p className="card-text">Au tour du constructeur MSI de proposer sa déclinaison de la carte graphique gaming NVIDIA RTX 2060 : la MSI RTX 2060 VENTUS XS OC.</p>
                        <div id="article">
                        <h5 class="text-center font-weight-bold" id="price">388€<small className="font-weight-bold">95</small></h5>
                        <button type="submit" className="btn btn-success">Ajouter au panier <i className="fas fa-shopping-cart"></i></button>
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <img src="./images/inno.jpg" className="card-img-top" alt="inno"/>
                        <div className="card-body">
                        <h5 className="card-title">Inno3D GeForce GTX 1060</h5>
                        <p className="card-text">Inno 3D et sa carte graphique GeForce GTX 1060 Gaming OC (N106F-CSDN-N6GSX) vous ouvre les portes de la réalité virtuelle.</p>
                        <div id="article">
                        <h5 class="text-center font-weight-bold" id="price">199€<small className="font-weight-bold">94</small></h5>
                        <button type="submit" className="btn btn-success">Ajouter au panier <i className="fas fa-shopping-cart"></i></button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Article;