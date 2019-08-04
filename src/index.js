import React , {Component} from 'react';
import ReactDom from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './component/page/Home';
import About from './component/page/About';
import Generator from './component/page/Generator';
import Test from './component/page/Test';
import './general.css';
class App extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return(
      <I18nextProvider i18n={i18n}>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/generator" component={Generator} />
            <Route path="/test" component={Test} />
          </div>
        </BrowserRouter>
      </I18nextProvider>
    );
  }

}

ReactDom.render(
  <App />,
  document.getElementById('app')
);