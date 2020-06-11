import React, {Component} from 'react';
import CardList from './cardlist/CardList';

import SearchBox from './searchbox/SearchBox';
import './App.css';


class App extends Component{

    state = {
        'robots' : [],
        'currentSearch' : ''
    }

    componentDidMount = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>this.setState({'robots':data}))
    }

    searchHandler = (e) => {
        this.setState({'currentSearch': e.target.value});
    }

    render(){
        if (this.state.robots.length === 0) {
            return <h1>Loading...</h1>
        } else {
            return(
                <div className="tc">
                    <h1 className='f1'>ROBOFRIENDS</h1>
                    <SearchBox searchHandler={this.searchHandler}/>
                    <CardList robots={this.state['robots']} search={this.state['currentSearch']}/>
                </div>
            )
        }

    }
} 

export default App;