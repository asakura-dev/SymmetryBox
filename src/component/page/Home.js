import React , {Component} from 'react';
import ScrollLayout from '../layout/ScrollLayout';
import { translate } from 'react-i18next';
class Home extends Component {
  constructor(props){
    super(props);
    console.log(props);
  }
  render(){
    return(
      <ScrollLayout>
        <div>Home</div>
      </ScrollLayout>
    );
  }
}
export default translate()(Home);