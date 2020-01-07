import React from "react";
import './NavBar.css';


function NavBar() {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <div className="container">
                <a href="#">
                    <h1>Logo</h1>
                </a>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Rechercher" />
                    <button className="btn btn-outline-warning my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                    <div className="icons-nav">
                        <a href="#">
                            <i className="far fa-user"></i>
                        </a>
                        <a href="#">
                            <i className="fas fa-shopping-cart"></i>
                        </a>
                    </div>
                </form>
            </div>
        </nav>
    )
}

export default NavBar;