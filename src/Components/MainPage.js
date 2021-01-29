import React, { Component } from 'react';
import Header from './Header';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';
import './MainPage.css';

class MainPage extends Component {

	componentDidMount() {
		this.props.onRequestRobots();
	}

	filteredRobots = () => {
		return this.props.robots.filter(robot => {
			return robot.name.toLowerCase().includes(this.props.searchField.toLowerCase())
		})
	}

	render() {
		const {  onSearchChange, isPending } = this.props;
		return (
			<div className = 'tc'>
				<Header />
				<SearchBox searchChange={onSearchChange}/>
				<Scroll>
					{ isPending ? <h1>Loading</h1> :
						<ErrorBoundry>
							<CardList robots ={this.filteredRobots()}/>
						</ErrorBoundry>
					}
				</Scroll>
			</div>
		);
	}
}

export default MainPage;