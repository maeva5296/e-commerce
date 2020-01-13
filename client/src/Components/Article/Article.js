import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import Ariane from "../Ariane/Ariane";
import DetailsArticle from "../DetailsArticle/DetailsArticle";
import "./Article.css";

class Article extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          article: [],
        };
      }
    
      componentDidMount() {
        fetch(`https://127.0.0.1:8000/api/categories/${this.props.match.params.id}`)
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                isLoaded: true,
                article: result.articles,
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
        const { error, isLoaded, article, categorieName } = this.state;
        var ArticleDetails = article.map((path) => {
          return <DetailsArticle api_path={path} />
        }) 
        if (error) {
          return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Chargement…</div>;
        } else {
            return (
              <div>
                <NavBar/>
                <div className="container">
                  <Ariane/>
                  <div className="row justify-content-center">
                    { ArticleDetails }
                  </div>
                </div>
                <Footer/>
              </div>
            )
        }
    }
}

export default Article;