import React from "react";
import "./ShoppingCart.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

class ShoppingCart extends React.Component {
    render() {
        return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="card text-center mt-5" id="width-row">
                    <div className="card-header">
                        <h2>Votre panier :</h2>
                    </div>
                    <div className="card-body">
                        <div className="col-sm-12">
                            <div className="row justify-content-center">
                                <div className="col-3 p-0">
                                    <p>DESIGNATION</p>
                                    <hr/>
                                    <p className="pt-4">carte graphique XD</p>
                                </div>
                                <div className="col-1 p-0">
                                    <p>PRIX</p>
                                    <hr/>
                                    <p className="pt-4">130€23</p>
                                </div>
                                <div className="col-2 p-0">
                                    <p>QUANTITE</p>
                                    <hr/>
                                    <select id="width-select" className="form-control mt-4">
                                        <option>1</option>
                                        <option>2</option>
                                    </select>
                                </div>
                                <div className="col-2 p-0">
                                    <p>SOUS-TOTAL</p>
                                    <hr/>
                                    <p className="pt-4">130€23</p>
                                </div>
                                <div className="col-1 pr-5 mt-5">
                                    <button type="button" className="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                                </div>
                                <div id="total" className="col-sm-3">
                                    <div card="card">
                                        <h5 className="mt-4">TOTAL TTC</h5>
                                        <h3 className="mt-5">130€23</h3>
                                        <button type="submit" className="btn btn-success btn-lg mt-5">
                                            Passer commande
                                        </button> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
        )
    }
}

export default ShoppingCart;