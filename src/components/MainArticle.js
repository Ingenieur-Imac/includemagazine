
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
      		</div>
      	</div>
      	<h1 id="articleTitle"><Link to="/article/1">Serendipity</Link></h1>
      </div>
    );
  }
}

export default MainArticle;
