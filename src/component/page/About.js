import React , {Component} from 'react';
import ScrollLayout from '../layout/ScrollLayout';
import { translate } from 'react-i18next';
class About extends Component {
  render(){
    return(
      <ScrollLayout>
        About
      </ScrollLayout>
    );
  }
}

export default translate()(About);