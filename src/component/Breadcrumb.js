import React , {Component} from 'react';
import { translate } from 'react-i18next';

class Breadcrumb extends Component {
  constructor(props){
    super(props);
    console.log(this.props);
  }
  render(){
    let { active_step, t } = this.props;
    return(
      <div className="breadcrumb">
        <div className={active_step == 0 ? "step active" : "step" }>
          <span className="step-number">1</span>
          <span className="step-text">
            {t('step-text1-top')}
            <br/>
            {t('step-text1-bottom')/*読み込む*/}
          </span>
        </div>
        <div className={active_step == 1 ? "step active" : "step" }>
          <span className="step-number">2</span>
          <span className="step-text">
            {t('step-text2-top')/*シンメトリー*/}
            <br/>
            {t('step-text2-bottom')/*生成*/}
          </span>
        </div>
        <div className={active_step == 2 ? "step active" : "step" }>
          <span className="step-number">3</span>
          <span className="step-text">
            {t('step-text3')/*ダウンロード*/}
          </span>
        </div>
      </div>
    );
  }
}
export default translate()(Breadcrumb);