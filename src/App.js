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

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Router>
                <main>
                    <h1>Include</h1>
                    <nav>
                        <Link to="/menu">Menu</Link>
                    </nav>

                    <content>
                        <Route exact path="/" component={MainArticle}/>
                        <Route path="/article/:id" component={Article}/>
                        <Route path="/menu" component={Menu}/>
                    </content>
                    <h1>Serendipity</h1>
                </main>
            </Router>
        </div>
    );
  }
}

export default App;
