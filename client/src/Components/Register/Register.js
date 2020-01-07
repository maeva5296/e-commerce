import React from 'react';
import "./Register.css"

function Register() {
    return(
        <div className="container">
            <div className="row justify-content-center" id="cardCenter">
                <div className="card col-md-5" id="cardContent">
                    <div className="card-body">
                        <form>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="option1"/>
                                <label class="form-check-label" for="inlineRadio1">Mme</label>
                            </div>
                            <div class="form-check form-check-inline">
                                <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2"/>
                                <label class="form-check-label" for="inlineRadio2">Mr</label>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Nom"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Adresse email"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
                            </div>
                            <div class="form-group">
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Comfirmer le mot de passe"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" placeholder="Ville"/>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg btn-block text-uppercase">Inscription</button>
                        </form>
                        <hr/>
                        <p className="card-text">Déjà client ?</p>
                        <a href="#" className="font-weight-bold"><u>Se connecter</u></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;