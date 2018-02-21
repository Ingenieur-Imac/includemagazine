
import React, { Component } from 'react';
import sketch from './../js/sketch.js'

import './../css/MainArticle.css';

import { Link } from 'react-router-dom'

var SerendipityCanvas = require('./SerendipityCanvas').default


class MainArticle extends Component {
  render() {
    return (
      <div className="MainArticle">
      	<SerendipityCanvas sketch={sketch} />
      	<div id="guiContainer">
      		<div id="guiControls">
      			<h3 id="createTitle">Create</h3>
      			<div id="datGui"></div>
      			<div id="buttons">
	            	<a id="resetBtn" href="#">Reset</a>
	      			<a id="saveBtn" href="#">Save</a>
	            </div>
	            <p id="explanations">
	            	Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
	            	Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
	            	Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
	            	Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
	            </p>
      		</div>
      	</div>
      	<h1 id="articleTitle"><Link to="/article/1">Serendipity</Link></h1>
      </div>
    );
  }
}

export default MainArticle;
