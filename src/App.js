import React, { Component } from 'react';
import './App.css';
import SearchBox from './components/SearchBox/SearchBox.jsx';
import CardList from './components/CardList/CardList';

class App extends Component {
	state = {
		monsters : [],
		search   : ''
	};

	searchRobotHandler = (event) => {
		this.setState({ search: event.target.value });
	};

	deleteRobotHandler = (id) => {
		const newMonsters = [
			...this.state.monsters
		];
		const newIndex = newMonsters.findIndex((item) => item.id === id);
		newMonsters.splice(newIndex, 1);
		this.setState({ monsters: newMonsters });
	};

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then((res) => res.json())
			.then((mons) => this.setState({ monsters: mons }));
	}

	render() {
		const { monsters, search } = this.state;
		const filteredMonsters = monsters.filter((mon) => mon.name.toLowerCase().includes(search.toLowerCase()));

		return (
			<div className='App'>
				<h1>Monsters Database</h1>
				<SearchBox searchValue={this.state.search} search={this.searchRobotHandler} />
				<CardList monsters={filteredMonsters} delete={this.deleteRobotHandler} />
			</div>
		);
	}
}

export default App;
