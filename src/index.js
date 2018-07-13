import React , {Component} from 'react';
import ReactDom from 'react-dom';
import { I18n } from 'react-i18next';
import './i18n';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './component/Home';
import About from './component/About';
import Generator from './component/Generator';

class App extends Component {

  constructor(props){
    super(props);
  }
  render() {
    return(
      <I18n>
        {
          (t, { i18n }) => (
            <BrowserRouter>
              <div>
                <Route path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/generator" component={Generator} />
              </div>
            </BrowserRouter>
          )
        }
      </I18n>
    );
  }

}

ReactDom.render(
  <App />,
  document.getElementById('app')
);