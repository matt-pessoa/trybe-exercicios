import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
	render() {
		return (
			<div>
				<Link to="/">Início</Link>
				<br />
				<Link to="/about">Sobre</Link>
			</div>
		);
	}
}

export default Header;
