import React from "react";
import './Home.css';


class Home extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        categorie: []
      };
    }
  
    componentDidMount() {
      fetch("https://127.0.0.1:8000/api/categories")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              categorie: result['hydra:member']
            });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, categorie } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
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
                        {categorie.map(categorie => (
                        <div className="col-3">
                            <img key={categorie.image} src={categorie.image} className="img-thumbnail" id="img_categorie" />
                            <div className="overlay img-thumbnail">
                                <div key={categorie.name} className="text">{categorie.name}</div>
                            </div>
                        </div>
                        ))}
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
            </div>
        );
      }
    }
  }

export default Home;

