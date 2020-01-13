import React, { Component } from 'react';
import Config from '../../config.json';

class BestArticles extends Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        BestArticle: []
        };
    }
    
    componentDidMount() {
        fetch("https://127.0.0.1:8000/api/articles?order[visits]=desc")
        .then(res => res.json())
        .then(
            (result) => {
                console.log(result['hydra:member'])
            this.setState({
                isLoaded: true,
                BestArticle: result['hydra:member']
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
        const { error, isLoaded, BestArticle } = this.state;
        if (error) {
        return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
        return <div>Chargement…</div>;
        } else {
            return (
                <div className="col">
                    {BestArticle.map(BestArticle => (
                        <div className="card" id="best-articles-card">
                            <img src={ Config.url + "/images/products/msi-rtx.jpg" } className="card-img-top img-thumbnail" alt="images product" />
                            <div className="card-body text-center">
                                <h5 className="card-title">MSI RTX 2060 super Gaming X</h5>
                                <a href="#" className="btn btn-warning pr-5 pl-5 font-weight-bold">Voir</a>
                            </div>
                        </div>
                    ))}
                </div>
            );
        }
    }
}

export default BestArticles;