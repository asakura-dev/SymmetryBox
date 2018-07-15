import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ImagePreview from './ImagePreview';
class ImageLoader extends Component{

  constructor(props){
    super(props);
  }
  handleChange = (e) => {
    let file = e.target.files[0];
    let image = new Image();
    let reader = new FileReader();
    reader.onload = (evt) => {
      image.onload = () => {
        this.props.onLoad(image);
      }
      image.src = evt.target.result;
    }
    reader.readAsDataURL(file);
  }
  render(){
    return(
      <div className="image-loader">
        <div className="load-button-container">
          <label htmlFor="file" className="button primary">イメージを選択</label>
          <input id="file" type="file" onChange={this.handleChange} style={{display: "none"}}/>
        </div>
        <ImagePreview image={this.props.image}/>
      </div>
    );
  }

}
export default translate()(ImageLoader);