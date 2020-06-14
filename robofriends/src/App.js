import React, {Component} from 'react';
import Nav from './nav/Nav';
import Robosearch from './robosearch/Robosearch';
import About from './about/About';
import Signin from './signin/Signin';
import './App.css';
import { BrowserRouter, Route} from 'react-router-dom';


class App extends Component{

    render(){
        return(
            <BrowserRouter>
                <div>
                    <Nav />
                    <Route exact path='/' component={Robosearch} />
                    <Route exact path='/about' component={About} />
                    <Route exact path='/signin' component={Signin} />
                </div>
            </BrowserRouter>             
        )
    }
} 

export default App;