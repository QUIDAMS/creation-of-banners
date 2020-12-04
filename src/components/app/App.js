import React, {Component} from 'react';
import Editor from '../editor';
import Preview from '../preview';
import Buttons from '../buttons';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';

import './app.scss';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      banner: {
        image: '',
        line1: '',
        line2: '',
        line3: '',
        color: '',
        topColorGradient: '',
        bottomColorGradient: '',
        url: '',
      }
    }
    this.enterInformationForBanner = this.enterInformationForBanner.bind(this);
    this.previewRef = React.createRef();
  }

  enterInformationForBanner(e, field){
    console.log(this.state.banner);
    let copyBanner = this.state.banner;
    copyBanner[field] = e.target.value;
    this.setState({banner: copyBanner})
  }

  render() {
    const {banner} = this.state;
    const htmlString = ReactDOMServer.renderToString(
      <Preview banner={banner} ref={this.previewRef}/>
    )
    return (
      <div>
        <div className='header'>Создай свой баннер заполнив поля</div>
        <Editor
          banner={banner}
          enterInformationForBanner={this.enterInformationForBanner}
        />
        <Preview
          banner={banner}
          ref={this.previewRef}
        />
        <Buttons
          banner={this.state}
          previewRef={this.previewRef}
          htmlString={htmlString}
        />
      </div>
    );
  }
}

Preview.propTypes = {
  banner: PropTypes.object,
  image: PropTypes.string,
  line1: PropTypes.string,
  line2: PropTypes.string,
  line3: PropTypes.string,
  color: PropTypes.string,
  topColorGradient: PropTypes.string,
  bottomColorGradient: PropTypes.string,
  url: PropTypes.string,
}
