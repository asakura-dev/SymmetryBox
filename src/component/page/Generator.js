import React , {Component} from 'react';
import { translate } from 'react-i18next';
import Header from '../Header';
import Breadcrumb from '../Breadcrumb';
import ActionButtons from '../ActionButtons';
import ImageLoader from '../ImageLoader';
import ImageGenerator from '../ImageGenerator';

class Generator extends Component {
  constructor(props){
    super(props);
    this.step_actions = [
      {
        prev: {
          text: "Topへ戻る",
          handleClick: () => this.props.history.push("/"),
        },
        next: {
          text: "次へ",
          handleClick: () => {
            console.log("次へ");
            if(this.state.original_image != null){
              this.setState({ current_step: 1 });
            }
          },
          disabled: () => {
            return this.state.original_image != null ? false : true;
          }
        }
      },
      {
        prev: {
          text: "戻る",
          handleClick: () => this.setState({  current_step: 0 })
        },
        next: {
          text: "次へ",
          handleClick: () => console.log("次へ"),
          disabled: () => false,
        }
      },
      {
        prev: {
          text: "戻る",
          handleClick: () => console.log("戻る"),
        },
        next: {
          text: "続けて作る",
          handleClick: () => console.log("続けて作る"),
          disabled: () => false,
        }
      }
    ];
    this.state = {
      current_step: 0,
      original_image: null,
      generated_image: null,
    }
  }
  handleLoad = (image) => {
    this.setState({original_image: image});
  }
  handleGenerate = (image) => {
    this.setState({generated_image: image});
  }
  render(){
    let { current_step, original_image } = this.state;
    let height = window.innerHeight;
    let step_action = this.step_actions[current_step];
    return(
      <div className="generator" style={{height: height}}>
        <div className="fix-size">
          <Header/>
          <Breadcrumb active_step={current_step}/>
        </div>
        <div className="variable-size">
          {current_step == 0 ? <ImageLoader image={original_image} onLoad={this.handleLoad}/> : null}
          {current_step == 1 ? <ImageGenerator image={original_image} onGenerate={this.handleGenerate}/> : null}
          {current_step == 2 ? <div>"hoge"</div> : null}
        </div>
        <div className="fix-size">
          <ActionButtons action={step_action}/>
        </div>
      </div>
    );
  }
}
export default translate()(Generator);