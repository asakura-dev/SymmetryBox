import React, { Component } from 'react';
import { translate } from 'react-i18next';
import ImagePreview from './ImagePreview';
class AutoGenerationEditor extends Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="auto-generation-editor">
        AutoGenerationEditor
        <ImagePreview image={this.props.image}/>
      </div>
    );
  }

}
export default translate()(AutoGenerationEditor);