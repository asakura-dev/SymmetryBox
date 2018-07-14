import React , {Component} from 'react';
import { translate } from 'react-i18next';

class Breadcrumb extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let { active_step } = this.props;
    return(
      <div className="breadcrumb">
        <div className={active_step == 1 ? "step active" : "step" }>
          <span className="step-number">1</span>
          <span className="step-text">
            イメージを<br/>読み込む
          </span>
        </div>
        <div className={active_step == 2 ? "step active" : "step" }>
          <span className="step-number">2</span>
          <span className="step-text">
            シンメトリー<br/>生成
          </span>
        </div>
        <div className={active_step == 3 ? "step active" : "step" }>
          <span className="step-number">3</span>
          <span className="step-text">
            ダウンロード
          </span>
        </div>
      </div>
    );
  }
}
export default translate()(Breadcrumb);