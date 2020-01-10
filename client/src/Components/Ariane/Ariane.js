import React from "react";
import './Ariane.css';


class Ariane extends React.Component {
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
            <div id="form" className="container">
                <div className="row justify-content">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                            {categorie.map(categorie => (
                                <li class="breadcrumb-item active" aria-current="page">{ categorie.name }</li>
                            ))}
                        </ol>
                    </nav>
                </div>
            </div>
            );
        }
    }
}

export default Ariane;