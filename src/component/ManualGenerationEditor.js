import React, { Component } from 'react';
import { translate } from 'react-i18next';

class ManualGenerationEditor extends Component{

  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="manual-generation-editor">
        プレビュー
        <ImagePreview image={this.props.image}/>
      </div>
    );
  }

}
export default translate()(ManualGenerationEditor);