import React, { Component } from "react"
import { Link } from "react-router-dom"
import AnalyticGraphics from "./components/analyticGraphics/analyticGraphics.js"


export default class Analytics extends Component {
    render () {
        return(
            <div>
                <AnalyticGraphics />
            </div>
        );
    }
}