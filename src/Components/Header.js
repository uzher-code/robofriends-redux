import React, { Component } from 'react';


class Header extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return false;
	}

	render() {
		console.log("Header")
		return (
			<h1 style = {{fontSize: "2.75rem"}}>RoboFriends</h1>
			)
	}
	
}


export default Header;