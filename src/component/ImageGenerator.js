import React, { Component } from 'react';
import { translate } from 'react-i18next';
import AutoGenerationEditor from './AutoGenerationEditor';
import ManualGenerationEditor from './ManualGenerationEditor';
class ImageGenerator extends Component{
  constructor(props){
    super(props);
    this.state = {
      active_tab: 0,
      images: [],
    };
  }
  generate = () => {
    let image = this.props.image;
    let images = this.refs.symmetry_auto_generator.generate(image);
    this.setState({images});
  }
  handleGenerate = (image) => {
    this.props.onGenerate(image);
  }
  render(){
    let { active_tab, images } = this.state;
    let { image } =this.props;
    return(
      <div className="image-generator">
        <div className="tab">
        <div className={active_tab == 0 ? "active tab-item" : "tab-item"} onClick={() => this.setState({active_tab: 0})}>自動生成</div>
          <div className={active_tab == 1 ? "active tab-item" : "tab-item"} onClick={() => this.setState({active_tab: 1})}>手動生成</div>
        </div>
        <div className="tab-content">
          {active_tab == 0 ? <AutoGenerationEditor image={image} onGenerate={this.handleGenerate} onRequestRegeneration={this.regenerate}/> : null}
          {active_tab == 1 ? <ManualGenerationEditor image={image} onGenerate={this.handleGenerate} /> : null }
        </div>
      </div>
    );
  }

}
export default translate()(ImageGenerator);