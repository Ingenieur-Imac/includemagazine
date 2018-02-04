
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Script from 'react-load-script'
// import P5Wrapper from 'react-p5-wrapper';
// import sketch from './../js/sketch2.js'

// var SerendipityCanvas = require('./SerendipityCanvas').default


class MainArticle extends Component {
  render() {
    return (
      <div className="MainArticle">
		<Script
		    url="https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.4/p5.js"
		    onCreate={this.handleScriptCreate.bind(this)}
		    onError={this.handleScriptError.bind(this)}
		    onLoad={this.handleScriptLoad.bind(this)}
		/>
		<Script
		    url="https://cdn.rawgit.com/bit101/quicksettings/master/quicksettings.js"
		    onCreate={this.handleScriptCreate.bind(this)}
		    onError={this.handleScriptError.bind(this)}
		    onLoad={this.handleScriptLoad.bind(this)}
		/>
		<Script
		    url="http://localhost/includemagazine/public/static/addons/dat.gui.js"
		    onCreate={this.handleScriptCreate.bind(this)}
		    onError={this.handleScriptError.bind(this)}
		    onLoad={this.handleScriptLoad.bind(this)}
		/>
		<Script
		    url="https://cdn.rawgit.com/bitcraftlab/p5.gui/master/libraries/p5.gui.js"
		    onCreate={this.handleScriptCreate.bind(this)}
		    onError={this.handleScriptError.bind(this)}
		    onLoad={this.handleScriptLoad.bind(this)}
		/>
		<Script
		    url="http://localhost/includemagazine/public/static/addons/sketch2.js"
		    onCreate={this.handleScriptCreate.bind(this)}
		    onError={this.handleScriptError.bind(this)}
		    onLoad={this.handleScriptLoad.bind(this)}
		/>
      </div>
    );
  }

  handleScriptCreate() {
  this.setState({ scriptLoaded: false })
}
 
handleScriptError() {
  this.setState({ scriptError: true })
}
 
handleScriptLoad() {
  this.setState({ scriptLoaded: true })
}
}

export default MainArticle;
