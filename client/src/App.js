import React from "react";
import Home from "./pages/Home/home.js"
import Analytics from "./pages/Analytics/Analytics.js"
import { BrowserRouter as Router, Route } from "react-router-dom"


const App = () => (
  <Router>
  <div>
    <Route path="/" exact component={Home}/>
    <Route path="/analytics" component={Analytics}/>
  </div>
  </Router>
);

export default App;
