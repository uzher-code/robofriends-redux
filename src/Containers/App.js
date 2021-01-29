import React, { Component } from 'react';
import { connect } from 'react-redux';
import MainPage from '../Components/MainPage';


import { setSearchField, requestRobots } from '../actions';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}

class App extends Component {
	render() {
		return <MainPage { ...this.props}/>
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(App);