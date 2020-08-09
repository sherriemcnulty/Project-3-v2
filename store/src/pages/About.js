import React, { Component } from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Wrapper from "../components/Wrapper";
import TeamCard from "../components/TeamCard";
import team from "./team.json";

class WrongAddress extends Component {

	render() {
		return (
			<div>
				<Hero backgroundImage="https://media4.s-nbcnews.com/i/newscms/2017_26/2053956/170627-better-grocery-store-main-se-539p_80a9ba9c8d466788799ca27568ee0d43.jpg">
					<h1>Products R Us</h1>
					<h2>What are you looking for?</h2>
				</Hero>
				<Container style={{ marginTop: 30 }}>
				<div class="jumbotron jumbotron--home text-center bg-white">
      <h1>404 - Page Not Found</h1>
      <img src="./assets/images/page-not-found.jpg" alt="page not found">
      <br>
      <a class="btn btn-lg mt-4 btn-success" href="/" role="button">Back to Home</a>
    </div>
				</Container>
			</div>
		);
	}
}

export default WrongAddress;
