import React from "react";
import './NavBar.css';


function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="#">
                    <img className="img-fluid" src="./images/logo.png" id="logo" />
                </a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" />
                    <button className="btn btn-warning my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                    <div className="icons-nav">
                        <div class="dropdown">
                            <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-user"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Mon profil</a>
                                <a class="dropdown-item" href="#">Mes commandes</a>
                                <a class="dropdown-item text-danger" href="#">Déconnexion</a>
                            </div>
                        </div>
                        <div class="dropdown">
                            <a href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="fas fa-shopping-cart"></i>
                            </a>
                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Article 1</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Article 2</a>
                                <div class="dropdown-divider"></div>
                                <a class="dropdown-item" href="#">Article 3</a>
                                <button type="button" class="btn btn-warning btn-block" id="voir-panier">Voir panier ></button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;