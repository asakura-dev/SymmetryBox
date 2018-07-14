import React, { Component } from 'react';
import { translate } from 'react-i18next';
import Img from '../img/slide-image1.png';
class Carousel extends Component{

  constructor(props){
    super(props);
  }
  render(){
    let { t } = this.props;
    return(
      <div className='carousel'>
        <div className="carousel-images">
          <img src={Img}/>
        </div>
        <div className='carousel-text'>
          {t('carousel-text')}
        </div>
      </div>
    );
  }

}
export default translate()(Carousel);