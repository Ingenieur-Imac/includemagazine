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
import ArticleList from './components/ArticleList'

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

              <Route exact path="/" component={MainArticle}/>
              <Route path="/article/:id" component={Article}/>
              <Route exact path="/menu" component={Menu}/>
              <Route exact path="/article" component={ArticleList}/>

            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
