import React, { Component } from "react";
import axios from 'axios';
import "../analyticGraphics/style.css";
import { withRouter } from "react-router-dom";
import Chart from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Todo:
// in App.js change analytic route to path="/analytics/:animal"
//in analyticGraphic.js (this file) import {withRouter} from "react-router-dom"
// move export to bottom of this file and export default withRouter(AnalyticGraphics)
// animal will be this.props.match.params.animal
//axios.get(`/api/hunting/${animal})

class AnalyticGraphics extends Component {

    state = {
        test: "test",
        show: false,
        animalData: [1, 2, 3, 4, 5],
        chartData: {
            datasets: [{
                label: "Hunters",
                data: [17, 56],
                backgroundColor: [
                    "rgba(0,0,0,0.6)",
                    "rgba(45,37,85,0.6)"
                ]
            }]
        }
    }

    componentDidMount() {
        const { animal } = this.props.match.params;
        axios.get(`/api/hunting/${animal}`).then(response => {
            this.setState({ animalData: response.data })
        });
    }


    componentDidUpdate() {
        console.log(this.state.animalData)
    }

    render() {
        console.log(this.state.animalData);
        const hunterArray = [];
        return (
            <div>
                <div id="container">
                    TEXAS PUBLIC LAND HUNTING
                </div>
                <div id="filterContainer">
                    <div className="row">
                        <div id="dropdown" className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle col-12" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter Results
                        </button>
                            <div className="dropdown-menu scrollable-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="/analytics/alligator">Alligator</a>
                                <a className="dropdown-item" href="/analytics/archery deer">Archery Deer</a>
                                <a className="dropdown-item" href="/analytics/archery exotic">Archery Exotic</a>
                                <a className="dropdown-item" href="/analytics/archery mule deer">Archery Mule Deer</a>
                                <a className="dropdown-item" href="/analytics/e-postcard archery deer">E-Postcard Archery Deer</a>
                                <a className="dropdown-item" href="/analytics/e-postcard feral hog">E-Postcard Feral Hog</a>
                                <a className="dropdown-item" href="/analytics/e-postcard feral hog">E-Postcard Feral Hog/Predator</a>
                                <a className="dropdown-item" href="/analytics/e-postcard furbearer">E-Postcard Furbearer/Predator</a>
                                <a className="dropdown-item" href="/analytics/e-postcard multi-species">E-Postcard Multi-Species</a>
                                <a className="dropdown-item" href="/analytics/e-postcard quail">E-Postcard Quail</a>
                                <a className="dropdown-item" href="/analytics/e-postcard squirrel">E-Postcard Squirrel</a>
                                <a className="dropdown-item" href="/analytics/e-postcard waterfowl">E-Postcard Waterfowl</a>
                                <a className="dropdown-item" href="/analytics/e-postcard waterfowl">E-Postcard Waterfowl/Pheasent</a>
                                <a className="dropdown-item" href="/analytics/e-postcard youth archery deer">E-Postcard Youth Archery Deer</a>
                                <a className="dropdown-item" href="/analytics/e-postcard youth deer">E-Postcard Youth Deer</a>
                                <a className="dropdown-item" href="/analytics/e-postcard youth">E-Postcard Youth/Adult Feral Hog</a>
                                <a className="dropdown-item" href="/analytics/e-postcard youth">E-Postcard Youth/Adult Waterfowl</a>
                                <a className="dropdown-item" href="/analytics/exotic">Exotic</a>
                                <a className="dropdown-item" href="/analytics/feral hog">Feral Hog</a>
                                <a className="dropdown-item" href="/analytics/guided gemsbok hunt package">Guided Gemsbok Hunt Package</a>
                                <a className="dropdown-item" href="/analytics/guided scimitar-horned oryx hunt package">Guided Scimitar-Horned Oryx Hunt Package</a>
                                <a className="dropdown-item" href="/analytics/guided waterbuck hunt package">Guided Waterbuck Hunt Package</a>
                                <a className="dropdown-item" href="/analytics/gun deer-antlerless">Gun Deer-Antlerless/Spike</a>
                                <a className="dropdown-item" href="/analytics/gun deer-either sex">Gun Deer-Either Sex</a>
                                <a className="dropdown-item" href="/analytics/gun deer-management">Gun Deer-Management</a>
                                <a className="dropdown-item" href="/analytics/gun mule deer">Gun Mule Deer</a>
                                <a className="dropdown-item" href="/analytics/javelina">Javelina</a>
                                <a className="dropdown-item" href="/analytics/private lands-antlerless">Private Lands-Antlerless/Spike</a>
                                <a className="dropdown-item" href="/analytics/private lands-either sex">Private Lands-Either Sex</a>
                                <a className="dropdown-item" href="/analytics/private lands-pronghorn">Private Lands-Pronghorn</a>
                                <a className="dropdown-item" href="/analytics/pronghorn">Pronghorn</a>
                                <a className="dropdown-item" href="/analytics/spring turkey">Spring Turkey</a>
                                <a className="dropdown-item" href="/analytics/youth only alligator">Youth Only Alligator</a>
                                <a className="dropdown-item" href="/analytics/youth only exotic">Youth Only Exotic</a>
                                <a className="dropdown-item" href="/analytics/youth only feral hog">Youth Only Feral Hog</a>
                                <a className="dropdown-item" href="/analytics/youth only gun deer-antlerless">Youth Only Gun Deer-Antlerless/Spike</a>
                                <a className="dropdown-item" href="/analytics/youth only gun deer-either sex">Youth Only Gun Deer-Either Sex</a>
                                <a className="dropdown-item" href="/analytics/youth only gun deer-management">Youth Only Gun Deer-Management</a>
                                <a className="dropdown-item" href="/analytics/youth only javelina">Youth Only Javelina</a>
                                <a className="dropdown-item" href="/analytics/youth only spring turkey">Youth Only Spring Turkey</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="resultContainer" >
                    {this.state.animalData.map((value, index) => {
                        return (
                            <div>
                                <div key={index} id="areaCards">
                                    <div id="areaCardRow" className="row">
                                        <div id="cardTitle" className="col-8">
                                            <h3 >{value.Area} - {value.Category}</h3>
                                            <h4 >{value.Acreage_Available} acres</h4>
                                        </div>
                                        <div className="col-2">
                                            <button id="seeMorebutton" className="btn btn-primary" type="button" data-toggle="collapse" data-target={"#areaCard-" + index} aria-expanded="false" aria-controls="collapseExample">
                                                More Info 
                                            </button>
                                        </div>
                                        <div className="areaCards collapse" id={"areaCard-" + index}>
                                            <div>
                                                <div className="row" id="infoContainer">
                                                    <div className="col-6" id="moreInfo">
                                                        Seson: {value.Season}
                                                        <br/>
                                                        Period: {value.Period}
                                                        <br/>
                                                        Period Began: {value.Period_Begin}
                                                        <br/>
                                                        Period Ended: {value.Period_End}
                                                        <br/>
                                                        Period Cancelled: {value.Period_Cancelled}
                                                        <br/>
                                                        Permits Available: {value.Permirs_Available_This_Period}
                                                        <br/>
                                                        Standby: {value.Standby_Available}
                                                        <br/>
                                                        Selected Hunters Participants: {value.Number_Selected_Hunter_that_Showed}
                                                        <br/>
                                                        Standby Hunter Applicants: {value.Number_Standby_Hunter_Applicants}
                                                        <br/>
                                                        Standby Hunters Selected: {value.Number_Standby_Applicants_Selected}
                                                        <br/>
                                                        Youth Participants: {value.Number_of_Youth_Participants}
                                                        <br/>
                                                        Total Participants: {value.Total_Number_of_Hunt_Participants}
                                                        <br/>
                                                        Successful Hunters: {value.Number_of_Successful_Hunters}
                                                        <br/>
                                                        Success Rate: {value.Percentage_of_Successful_Hunters}
                                                        <br/>
                                                        Targeted Species: {value.Targeted_Species}
                                                        <br/>
                                                        Harvested Male/Bucks: {value.Male_Bucks}
                                                        <br/>
                                                        Harvested Female/Antlerless: {value.Female_Anterless}
                                                        <br/>
                                                        Non Targeted Species: {value.Non_Targeted_Species}
                                                    </div>
                                                    <div className="col-6">
                                                        <Doughnut className="successChart" data={this.state.chartData} />
                                                        <div id="percentage">
                                                            {value.Percentage_of_Successful_Hunters} Success Rate
                                                        </div>
                                                    </div>
                                                   
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default withRouter(AnalyticGraphics);