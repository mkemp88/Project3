import React, { Component } from "react"
import "../analyticGraphics/style.css"


export default class AnalyticGraphics extends Component {
    render() {
        return (
            <div>
                <div id="container">
                    Texas Public Land Hunting
                </div>
                <div id="filterContainer">
                    <div className="row">
                    <div id="dropdown" className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter Results
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="#">Alligator</a>
                            <a className="dropdown-item" href="#">Archery Deer</a>
                            <a className="dropdown-item" href="#">Archery Exotic</a>
                            <a className="dropdown-item" href="#">Archery Mule Deer</a>
                            <a className="dropdown-item" href="#">E-Postcard Archery Deer</a>
                            <a className="dropdown-item" href="#">E-Postcard Feral Hog</a>
                            <a className="dropdown-item" href="#">E-Postcard Feral Hog/Predator</a>
                            <a className="dropdown-item" href="#">E-Postcard Furbearer/Predator</a>
                            <a className="dropdown-item" href="#">E-Postcard Multi-Species</a>
                            <a className="dropdown-item" href="#">E-Postcard Quail</a>
                            <a className="dropdown-item" href="#">E-Postcard Squirrel</a>
                            <a className="dropdown-item" href="#">E-Postcard Waterfowl</a>
                            <a className="dropdown-item" href="#">E-Postcard Waterfowl/Pheasent</a>
                            <a className="dropdown-item" href="#">E-Postcard Youth Archery Deer</a>
                            <a className="dropdown-item" href="#">E-Postcard Youth Deer</a>
                            <a className="dropdown-item" href="#">E-Postcard Youth/Adult Feral Hog</a>
                            <a className="dropdown-item" href="#">E-Postcard Youth/Adult Waterfowl</a>
                            <a className="dropdown-item" href="#">Exotic</a>
                            <a className="dropdown-item" href="#">Feral Hog</a>
                            <a className="dropdown-item" href="#">Guided Gemsbok Hunt Package</a>
                            <a className="dropdown-item" href="#">Guided Scimitar-Horned Oryx Hunt Package</a>
                            <a className="dropdown-item" href="#">Guided Waterbuck Hunt Package</a>
                            <a className="dropdown-item" href="#">Gun Deer-Antlerless/Spike</a>
                            <a className="dropdown-item" href="#">Gun Deer-Either Sex</a>
                            <a className="dropdown-item" href="#">Gun Deer-Management</a>
                            <a className="dropdown-item" href="#">Gun Mule Deer</a>
                            <a className="dropdown-item" href="#">Javelina</a>
                            <a className="dropdown-item" href="#">Private Lands-Antlerless/Spike</a>
                            <a className="dropdown-item" href="#">Private Lands-Either Sex</a>
                            <a className="dropdown-item" href="#">Private Lands-Pronghorn</a>
                            <a className="dropdown-item" href="#">Pronghorn</a>
                            <a className="dropdown-item" href="#">Spring Turkey</a>
                            <a className="dropdown-item" href="#">Youth Only Alligator</a>
                            <a className="dropdown-item" href="#">Youth Only Exotic</a>
                            <a className="dropdown-item" href="#">Youth Only Feral Hog</a>
                            <a className="dropdown-item" href="#">Youth Only Gun Deer-Antlerless/Spike</a>
                            <a className="dropdown-item" href="#">Youth Only Gun Deer-Either Sex</a>
                            <a className="dropdown-item" href="#">Youth Only Gun Deer-Management</a>
                            <a className="dropdown-item" href="#">Youth Only Javelina</a>
                            <a className="dropdown-item" href="#">Youth Only Spring Turkey</a>
                        </div>
                    </div>
                    </div>
                </div>
                <div id="resultContainer">
                </div>
            </div>
        )
    }
}