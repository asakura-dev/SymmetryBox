import React , {Component} from 'react';
import { translate } from 'react-i18next';

class ActionButtons extends Component {
  constructor(props){
    super(props);
  }
  render(){
    let { action } = this.props;
    return(
      <div className="action-buttons">
        <button className="button secondary" onClick={action.prev.handleClick}>
          {action.prev.text}
        </button>
        <button className="button primary" onClick={action.next.handleClick} disabled={action.next.disabled()}>
          {action.next.text}
        </button>
      </div>
    );
  }
}
export default translate()(ActionButtons);