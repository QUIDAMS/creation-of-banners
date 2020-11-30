import React, {Component} from 'react';
import Editor from '../editor';
import Preview from '../preview';
import Buttons from '../buttons';
import ReactDOMServer from 'react-dom/server';


export default class App extends Component {
  constructor(){
    super();
    this.state = {
      banner: {
        image: 'https://i.ibb.co/QQxXbY1/BF69285-E-8203-4-E8-C-8251-D744-BDF7-ECD3.png',
        line1: 'Строка ',
        line2: 'line2',
        line3: 'line3',
        color: '#4c0a28',
        topColorGradient: '#e214c9',
        bottomColorGradient: '#149fe2',
        url: 'https://github.com/avito-tech/vas-frontend-trainee-assignment/blob/main/README.md',
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
    const htmlString = ReactDOMServer.renderToString(<Preview banner={banner} ref={this.previewRef}/>)

    return (
      <div>
        <Editor
          banner={banner}
          enterInformationForBanner={this.enterInformationForBanner}
        />
        <Preview banner={banner} ref={this.previewRef}/>
        <Buttons banner={this.state} previewRef={this.previewRef} htmlString={htmlString}/>
      </div>
    );
  }
}
