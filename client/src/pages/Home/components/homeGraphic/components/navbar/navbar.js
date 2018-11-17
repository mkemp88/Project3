import React, { Component } from "react";
import "../../../homeGraphic/style.css"


export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav id="navbar" className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">Texas Public Land Hunting</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Category
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                        <a className="dropdown-item" href="#">Alligator</a>
                                        <a className="dropdown-item" href="#">Deer</a>
                                        <a className="dropdown-item" href="#">Exotic</a>
                                        <a className="dropdown-item" href="#">Feral Hog</a>
                                        <a className="dropdown-item" href="#">Game Birds</a>
                                        <a className="dropdown-item" href="#">Javelina</a>
                                        <a className="dropdown-item" href="#">Mule Deer</a>
                                        <a className="dropdown-item" href="#">Predator</a>
                                        <a className="dropdown-item" href="#">Private Lands</a>
                                        <a className="dropdown-item" href="#">Pronghorn</a>
                                        <a className="dropdown-item" href="#">Waterfowl</a>
                                        <a className="dropdown-item" href="#">Youth Only</a>
                                    </div>
                                </li>
                                <form className="form-inline">
                                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form>
                            </ul>
                        </div>
                        </div>
                </nav>
            </div>
                )
            }
}