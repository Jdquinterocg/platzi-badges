import React from "react"; //React como análogo a createElement
import ReactDOM from "react-dom"; // ReactDOM a appendChild

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import App from "./components/App";

const container = document.getElementById("app");

//ReactDOM.render() toma dos argumentos: Qué queremos renderizar y dónde lo queremos renderizar.
ReactDOM.render(<App />, container);