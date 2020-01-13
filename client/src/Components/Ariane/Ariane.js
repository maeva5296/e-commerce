import React from "react";
import './Ariane.css';

class Ariane extends React.Component {
    render() {
        return (
        <div id="form" className="container">
            <div className="row justify-content">
                <nav aria-label="breadcrumb">
                    <ol class="breadcrumb">
                        <li className="breadcrumb-item"><a href="#"><i className="fas fa-home"></i></a></li>
                        <li className="breadcrumb-item active" aria-current="page">{this.props.nameCategorie}</li>
                    </ol>
                </nav>
            </div>
        </div>
        );
    }
}

export default Ariane;