import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Article from './components/Article'
import MainArticle from './components/MainArticle'
import Menu from './components/Menu'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="titleMagazine">INCLUDE</h1>

        <Router>
          <div className="containerNav">

            {/*<nav>
              <li><Link to="/menu">Menu</Link></li>
            </nav>*/}

            <Route exact path="/" component={MainArticle}/>
            <Route path="/article/:id" component={Article}/>
            <Route path="/menu" component={Menu}/>

          </div>
        </Router>
      </div>
    );
  }
}

export default App;
