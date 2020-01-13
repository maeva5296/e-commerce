import React, { Component } from 'react';
import Config from "../../config.json";

class DetailsArticle extends Component {

    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        DeatilsArticle: []
        };
    }
    
    componentDidMount() {
        fetch(`https://127.0.0.1:8000${this.props.api_path}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                DetailsArticle: result
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
      const { error, isLoaded, DetailsArticle } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
          <div class="card-group">
            <div className="card">
              <img key={ DetailsArticle.image } src={ Config.url +"/" + DetailsArticle.image } className="card-img-top" alt="Desc Img"/>
              <div className="card-body">
                <h5 key={ DetailsArticle.name } className="card-title">{ DetailsArticle.name }</h5>
                <p key={ DetailsArticle.description } className="card-text">{ DetailsArticle.description }</p>
                <p key={ DetailsArticle.stock } className="card-text">{ DetailsArticle.stock }</p>
                <div id="article">
                  <h5 key={ DetailsArticle.price } class="text-center font-weight-bold" id="price">{ DetailsArticle.price }<small className="font-weight-bold">€</small></h5>
                  <button type="submit" className="btn btn-success">Ajouter au panier <i className="fas fa-shopping-cart"></i></button>
                </div>
              </div>
            </div>
          </div>
        );
    }
  }
}

export default DetailsArticle;