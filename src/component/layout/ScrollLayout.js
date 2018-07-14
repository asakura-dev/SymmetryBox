import React , {Component} from 'react';
import Header from '../Header';
import Footer from '../Footer';
export default class ScrollLayout extends Component{
  constructor(props){
    super(props);
  }
  render(){
    let { children } = this.props;
    return(
      <React.Fragment>
        <Header/>
        {children}
        <Footer/>
      </React.Fragment>
    );
  }
}