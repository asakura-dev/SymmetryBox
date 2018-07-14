import React , {Component} from 'react';
import { translate } from 'react-i18next';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
class Generator extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let height = window.innerHeight;
    return(
      <div className="generator" style={{height: height}}>
        <div className="fix-size">
          <Header/>
          <Breadcrumb active_step="1"/>
        </div>
        <div className="variable-size">
          <div>Generator</div>
        </div>
        <div className="fix-size">
          hoge
        </div>
      </div>
    );
  }
}
export default translate()(Generator);