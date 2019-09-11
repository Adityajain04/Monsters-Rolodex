import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users}))
  }

  render() {
    const {monsters, searchField} = this.state;
    const filteredMonsters = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchField.toLowerCase())
    });
    return (
      <div className="container-fluid text-center">
        <h1>Monster Rolodex</h1>
        <div className="row">
          <SearchBox placeholder="search monsters" handleChange={e => this.setState({searchField: e.target.value})}/>
          <div className="container">
            <CardList monsters={filteredMonsters} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
