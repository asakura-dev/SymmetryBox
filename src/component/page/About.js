import React , {Component} from 'react';
import ScrollLayout from '../layout/ScrollLayout';
import { translate } from 'react-i18next';
class About extends Component {
  render(){
    let { t } = this.props;
    return(
      <ScrollLayout>
        <h1>About</h1>
        <h2>{t('about_service_title')}</h2>
        <p>{t('about_service_text')}</p>
        <h2>{t('about_admin_title')}</h2>
        <p><a target = "_blank" href="https://twitter.com/asakura_dev">asakura_dev</a></p>
        <h2>Github</h2>
        <p><a target = "_blank" href="https://github.com/asakura-dev/SymmetryBox">asakura-dev/SymmetryBox</a></p>
      </ScrollLayout>
    );
  }
}

export default translate()(About);