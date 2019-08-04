import React , {Component} from 'react';
import ScrollLayout from '../layout/ScrollLayout';
import { translate } from 'react-i18next';

const MODE_WAIT = "MODE_WAIT";
const MODE_SWIPE = "MODE_SWIPE";
const MODE_SCROLL = "MODE_SCROLL";
const ENABLE_THRESHOLD_RIGHT = 100;
const DISABLE_THRESHOLD_RIGHT = 80;
const ENABLE_THRESHOLD_LEFT = -100;
const DISABLE_THRESHOLD_LEFT = -80;
class Test extends Component {

  constructor(props){
    super(props);
    this.state = {
      touchStartX: 0,
      touchStartY: 0,
      mode: null, // null, "wait", "scroll", "swipe"
      isSwipeRight: false,
      isSwipeLeft: false,
    };
  }

  componentDidMount(){
    window.addEventListener("touchstart", this.handleTouchStart);
    window.addEventListener("touchmove", this.handleTouchMove, {passive: false});
    window.addEventListener("touchend", this.handleTouchEnd);
  }

  handleTouchStart = (event) => {
    this.setState({
      touchStartX: event.touches[0].pageX,
      touchStartY: event.touches[0].pageY,
      mode: MODE_WAIT,
    })
  }

  handleTouchMove = (event) => {
    const x = event.touches[0].pageX;
    const y = event.touches[0].pageY;
    const { touchStartX, touchStartY, mode } = this.state;
    if (mode === MODE_WAIT) {
      if (Math.abs(y-touchStartY) > 10) {
        this.setState({ mode: MODE_SCROLL });
      }else if(Math.abs(x-touchStartX) > 10){
        this.setState({ mode: MODE_SWIPE });
      }
    }
    if (mode === MODE_SWIPE) {
      const diffX = x - touchStartX;
      if (diffX > ENABLE_THRESHOLD_RIGHT) { 
        this.setState({ isSwipeRight: true });
      }
      if (diffX < DISABLE_THRESHOLD_RIGHT) {
        this.setState({ isSwipeRight: false });
      }
      if (diffX < ENABLE_THRESHOLD_LEFT) {
        this.setState({ isSwipeLeft: true });
      }
      if (diffX > DISABLE_THRESHOLD_LEFT){
        this.setState({ isSwipeLeft: false });
      }
      event.preventDefault();
    }
    if (mode === MODE_SCROLL) {
      console.log("scroll");
    }
  }

  handleTouchEnd = (event) => {
    console.log(event);
    const { isSwipeRight, isSwipeLeft } = this.state;
    if (isSwipeRight) {
      alert("次のタブ");
      this.resetState();
    }
    if (isSwipeLeft) {
      alert("前のタブ");
      this.resetState();
    }
  }

  resetState() {
    this.setState({
      touchStartX: 0,
      touchStartY: 0,
      mode: null,
      isSwipeRight: false,
      isSwipeLeft: false}
    );
  }

  preventScroll = (event) => {
    event.preventDefault();
  }

  render(){
    let { t } = this.props;
    const { isSwipeRight, isSwipeLeft } = this.state;
    return(
      <ScrollLayout>
        { isSwipeRight && (
          <div className="swipe-right">
            <div className="swipe-right-inner">
              次のタブ
            </div>
          </div>
        )}
        { isSwipeLeft && (
          <div className="swipe-left">
            <div className="swipe-left-inner">
              前のタブ
            </div>
          </div>
        )}
        <h1>Test</h1>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
        aaaaa<br/>
      </ScrollLayout>
    );
  }
}

export default translate()(Test);