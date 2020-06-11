import React, {Component} from 'react';
import CardList from './cardlist/CardList';
import {robots} from './card/robots';
import SearchBox from './searchbox/SearchBox';
import './App.css';


class App extends Component{

    state = {
        'robots' : robots,
        'currentSearch' : ''
    }

    searchHandler = (e) => {
        this.setState({'currentSearch': e.target.value});
    }

    render(){
        return(
            <div className="tc">
                <h1 className='f1'>ROBOFRIENDS</h1>
                <SearchBox searchHandler={this.searchHandler}/>
                <CardList robots={this.state['robots']} search={this.state['currentSearch']}/>
            </div>
        )
    }
} 

export default App;