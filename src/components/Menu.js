import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Article from './Article'
import MainArticle from './MainArticle'

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

class Menu extends Component {
  render() {
    return (
      <div className="Menu">
      
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/article/1">Article id 1</Link></li>
            </ul>
          </div>
      
      </div>
    );
  }
}

export default Menu;
