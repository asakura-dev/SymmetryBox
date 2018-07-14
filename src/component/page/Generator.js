import React , {Component} from 'react';
import { translate } from 'react-i18next';

class Generator extends Component {
  render(){
    return(<div>Generator</div>);
  }
}
export default translate()(Generator);