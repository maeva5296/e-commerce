import React from 'react';
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
import "./Register.css";

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            email: "",
            password: "",
            passwordVerify: "",
            firstname: "",
            city: ""
        };

    this.email = this.email.bind(this);
    this.password = this.password.bind(this);
    this.passwordVerify = this.passwordVerify.bind(this);
    this.firstname = this.firstname.bind(this);
    this.city = this.city.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this); 
    }

    email(event) {  
        this.setState({ email: event.target.value })  
    } 
    password(event) {  
        this.setState({ password: event.target.value })  
    }  
    passwordVerify(event) {  
        this.setState({ passwordVerify: event.target.value })  
    }  
    firstname(event) {  
        this.setState({ firstname: event.target.value })  
    }  
    city(event) {  
        this.setState({ city: event.target.value })  
    }  

    handleSubmit(event) {
        event.preventDefault();
        const { password, passwordVerify } = this.state;
        if (password !== passwordVerify) {
            alert("Passwords don't match");
        } else {
            fetch("https://127.0.0.1:8000/api/users", {
                method: 'POST',
                headers: {
                    'Accept': 'application/ld+json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                    firstname: this.state.firstname,
                    city: this.state.city
                })
            }).then((res) => res.json().then((result) => {
              window.location.replace('/login');
            }))
        }
    }
    render() {
        return(
            <div>
                <NavBar/>
                    <div id="form" className="container">
                        <div className="row justify-content-center" id="cardCenter">
                            <div className="col mb-3">
                                <h2 className="text-center">Créez votre compte</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center" id="cardCenter">
                            <div className="card col-md-5" id="cardContent">
                                <div className="card-body">
                                    <form onSubmit={this.handleSubmit} >
                                        <div className="form-group">
                                            <input type="text" onChange={this.firstname} className="form-control" placeholder="Nom"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="email" onChange={this.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse email"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" onChange={this.password} className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="password" onChange={this.passwordVerify} className="form-control" id="exampleInputPassword1" placeholder="Comfirmer le mot de passe"/>
                                        </div>
                                        <div className="form-group">
                                            <input type="text" onChange={this.city} className="form-control" placeholder="Ville"/>
                                        </div>
                                        <button type="submit" className="btn btn-warning btn-lg btn-block text-uppercase">Inscription</button>
                                    </form>
                                    <hr/>
                                    <br/>
                                    <p className="card-text">Déjà client ?</p>
                                    <a href="#" className="font-weight-bold"><u>Se connecter</u></a>
                                </div>
                            </div>
                        </div>
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Register;