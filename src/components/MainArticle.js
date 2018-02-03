
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import P5Wrapper from 'react-p5-wrapper';
import sketch from './../js/sketch.js'

var Wrapper = require('./serendipityCanvas').default


class MainArticle extends Component {
  render() {
    return (
      <div className="MainArticle">
        <P5Wrapper sketch={sketch} />
      </div>
    );
  }
}

export default MainArticle;
