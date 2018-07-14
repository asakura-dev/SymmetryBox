import React , {Component} from 'react';
import ScrollLayout from '../layout/ScrollLayout';
import { translate } from 'react-i18next';
import Carousel from '../Carousel';
class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <ScrollLayout>
        <Carousel/>
        <div>Home</div>
      </ScrollLayout>
    );
  }
}
export default translate()(Home);