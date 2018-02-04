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
            <Router>
                <div>
                    <h1>Include</h1>
                    <nav>
                        <Link to="/menu">Menu</Link>
                    </nav>

                    <main>
                        <Route exact path="/" component={MainArticle}/>
                        <Route path="/article/:id" component={Article}/>
                        <Route path="/menu" component={Menu}/>
                    </main>
                    <h1>Serendipity</h1>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
