import React, { Component } from "react"
import "../homeGraphic/style.css"

export default class HomeGraphic extends Component {
    render() {
        return (
            <div>
                <div id="container">
                    TEXAS PUBLIC LAND HUNTING
                </div>
                <div id="container2">
                    Go afield with a good attitude, with respect for the wildlife you hunt and for the forest and fields in which you walk. Immerse yourself in the outdoor experience. It will cleanse your soul and make you a better person.
                    <br />
                    -Fred Bear
                </div>
                <div id="container3">
                    <div id="searchTitle">
                        Search for a unit or species
                    </div>
                    <form id="searchForm" className="form-inline">
                        <input id="searchInput" className="form-control col-7" type="search" placeholder="Search" aria-label="Search" />
                        <button id="searchButton" className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div className="row">
                        <div className="col-3">
                            <div id="alligator">
                            </div>
                            <div className="categoryTag" href="/analytics/alligator">
                                <a href="/analytics/alligator">Alligator</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="deer">
                            </div>
                            <div className="categoryTag">
                               <a href="/analytics/deer">Deer</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="exotic">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/exotic">Exotic</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="feralHog">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/feral hog">Feral Hog</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="gameBirds">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/game birds">Game Birds</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="javelina">
                            </div>
                            <div className="categoryTag">
                            <a href="/analytics/javelina">Javelina</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="muleDeer">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/mule deer">Mule Deer</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="predator">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/predator">Predator</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="privateLands">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/private lands">Private Lands</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="pronghorn">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/pronghorn">Pronghorn</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="waterfowl">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/waterfowl">Waterfowl</a>
                            </div>
                        </div>
                        <div className="col-3">
                            <div id="youth">
                            </div>
                            <div className="categoryTag">
                                <a href="/analytics/youth only">Youth Only</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}