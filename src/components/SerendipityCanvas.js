import React, { Component } from 'react';
import p5 from 'p5';

class P5Wrapper extends Component {

  componentDidMount() {
    this.canvas = new p5(this.props.sketch, this.wrapper);
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(this.props);
    }
  }

  componentWillReceiveProps(newprops) {
    if(this.props.sketch !== newprops.sketch){
      this.wrapper.removeChild(this.wrapper.childNodes[0]);
      this.canvas = new p5(newprops.sketch, this.wrapper);
    }
    if( this.canvas.myCustomRedrawAccordingToNewPropsHandler ) {
      this.canvas.myCustomRedrawAccordingToNewPropsHandler(newprops);
    }
  }

  render() {
    return (
      <div id="canvasContainer" ref={wrapper => this.wrapper = wrapper}>
        <p id="inspiration">Inspiré de l'oeuvre de Frieder Nake</p>
      </div>
    );
  }
}

export default P5Wrapper;