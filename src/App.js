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
import Accueil from './components/Accueil'

import burgerMenu from './assets/menu.svg'

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div id="wrapper">
            <header>
                <Link className="titleMagazine" to="/">INCLUDE</Link>
                <nav>
                  <Link id="menu" to="/menu">&nbsp;</Link>
                </nav> 
            </header>
            <div className="containerNav">           

              <Route exact path="/" component={Accueil}/>
              <Route exact path="/serendipity" component={MainArticle}/>
              <Route path="/article/:id" component={Article}/>
              <Route path="/menu" component={Menu}/>

            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
