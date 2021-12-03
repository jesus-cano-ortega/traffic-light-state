import React from "react";
import ReactDOM from "react-dom";

//Styles
import "bootstrap";
import "../styles/index.scss";

//Components
import TrafficLight from "./component/TrafficLight.jsx";

ReactDOM.render(<TrafficLight />, document.querySelector("#app"));
