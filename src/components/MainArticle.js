
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
// import Script from 'react-load-script'
import P5Wrapper from 'react-p5-wrapper';
import sketch from './../js/sketch.js'

import './../css/MainArticle.css';

var SerendipityCanvas = require('./SerendipityCanvas').default


class MainArticle extends Component {
  render() {
    return (
      <div className="MainArticle">
      	<SerendipityCanvas sketch={sketch} />
      	<div id="datGuiContainer"></div>
      </div>
    );
  }
}

export default MainArticle;
