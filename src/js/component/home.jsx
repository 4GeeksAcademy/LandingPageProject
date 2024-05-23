import React from "react";
import ReactDOM from "react-dom";
//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg"
import reactDom from "react-dom";
import NavBar from "./NavBar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import Footer from "../Footer";

//create your first component
const Home = () => {
	return (
	  <div className="d-flex flex-column min-vh-100">
		<NavBar />
		<div className="flex-grow-1">
		  <Jumbotron />
			<div className="row justify-content-center">
			  <Card />
			  <Card />
			  <Card />
			  <Card />
			</div>
		</div>
		<Footer />
	  </div>
	);
  };

export default Home;
ReactDOM.render(<Home />, document.querySelector("#app"))