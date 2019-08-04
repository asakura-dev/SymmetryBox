import React, { Component } from 'react';
import { translate } from 'react-i18next';
class LanguageSelector extends Component{

  constructor(props){
    super(props);
  }
  handleChange = (e) => {
    let { i18n } = this.props;
    i18n.changeLanguage(e.target.value);
  }
  render(){
    let lang = this.props.i18n.language;
    return(
      <div className='language-selector'>
      {"Language "}
      <select name='language' onChange={this.handleChange} value={lang}>
        <option value='ja'>日本語</option>
        <option value='en'>English</option>
      </select>
    </div>
    );
  }

}
export default translate()(LanguageSelector);