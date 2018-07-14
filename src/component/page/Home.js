import React , {Component} from 'react';
import ScrollLayout from '../layout/ScrollLayout';
import { translate } from 'react-i18next';
import Carousel from '../Carousel';
import { Link } from 'react-router-dom';
class Home extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let { t } = this.props;
    return(
      <ScrollLayout>
        <Carousel/>
        <div className="start-container">
          <Link to="generation" className="button primary">
            {t('start_to_generate')}
          </Link>
        </div>
        <div className="how-to-use">
          <h1>{t('how_to_use')}</h1>
          <hr/>
          <ol>
            <li>
              {t('how_to_use_step1')}
              <br/>
              <span className='annotation'>
                {t('how_to_use_step1_annotation')}
              </span>
            </li>
            <li>{t('how_to_use_step2')}</li>
            <li>{t('how_to_use_step3')}</li>
          </ol>
        </div>
      </ScrollLayout>
    );
  }
}
export default translate()(Home);