import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


class Test extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        error: null,
        isLoaded: false,
        test: [],
      };
    }
  
    componentDidMount() {
      fetch(`https://127.0.0.1:8000/api/categories/${this.props.match.params.id}`)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              test: result['articles']
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

    TestView() {
      console.log(this.state.test[0])
        fetch(`https://127.0.0.1:8000${this.state.test[0]}`)
        .then(
          (result) => {
            console.log(result)
          }
        )
    }
    
    render() {
      this.TestView()
      const { error, isLoaded, test } = this.state;
      if (error) {
        return <div>Erreur : {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Chargement…</div>;
      } else {
        return (
            <div>
                {test.map(test => (
                <div key={test}>
                    {test}
                </div>
                ))}
            </div>
        );
      }
    }
  }

export default Test;

