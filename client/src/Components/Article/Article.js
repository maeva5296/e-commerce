import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Article.css";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          article: []
        };
      }
    
      componentDidMount() {
        fetch("https://127.0.0.1:8000/api/articles")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                article: result['hydra:member']
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
        const { error, isLoaded, article } = this.state;
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
            return (
                <div id="form" className="container">
                    <div className="row justify-content-center">
                        <div class="card-group">
                            <div className="card">
                                <img key={ article.image } src={ article.image } className="card-img-top" alt="radeon"/>
                                <div className="card-body">
                                <h5 key={ article.name } className="card-title">{ article.name }</h5>
                                <p key={ article.description } className="card-text">{ article.description }</p>
                                <div id="article">
                                <h5 key={ article.price } class="text-center font-weight-bold" id="price">{ article.price }<small className="font-weight-bold">€</small></h5>
                                <button type="submit" className="btn btn-success">Ajouter au panier <i className="fas fa-shopping-cart"></i></button>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default Article;