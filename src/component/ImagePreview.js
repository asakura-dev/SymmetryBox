import React, { Component } from 'react';
export default class ImagePreview extends Component{

  constructor(props){
    super(props);
  }
  drawImage = () => {
    if(this.props.image){
      let image = this.props.image;
      let canvas = this.refs.canvas;
      let ctx = canvas.getContext("2d");
      canvas.width = image.width;
      canvas.height = image.height;
      ctx.drawImage(image, 0, 0);
    }
  }
  componentDidMount(){
    this.drawImage();
  }
  componentDidUpdate(){
    this.drawImage();
  }
  render(){
    return(
      <div className="image-preview">
        <canvas ref="canvas" />
      </div>
    );
  }
  
}