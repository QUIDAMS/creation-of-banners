import React, {Component} from 'react';
import Editor from '../editor';
import Preview from '../preview';
import Buttons from '../buttons';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      banner: {
        image: 'https://i.ibb.co/QQxXbY1/BF69285-E-8203-4-E8-C-8251-D744-BDF7-ECD3.png',
        line1: 'Строка окушпоукопуп пушощшцоугазшгцуазц цу аопу цашуцзгазщуцг ацзуагзщцгуза гцаг цазщгцузгацщ ахцащ1',
        line2: 'line2',
        line3: 'line3',
        color: '#4c0a28',
        topColorGradient: '#e214c9',
        bottomColorGradient: '#149fe2',
        url: 'https://github.com/avito-tech/vas-frontend-trainee-assignment/blob/main/README.md',
      }
    }
    this.enterInformationForBanner = this.enterInformationForBanner.bind(this);
  }
  enterInformationForBanner(e, field){
    console.log(this.state.banner);
    let copyBanner = this.state.banner;
    copyBanner[field] = e.target.value;
    this.setState({banner: copyBanner})
  }

  render() {
    const {banner} = this.state;
    return (
      <div>
        <Editor
          banner={banner}
          enterInformationForBanner={this.enterInformationForBanner}
        />
        <Preview banner={banner}/>
        <Buttons banner={this.state}/>
      </div>
    );
  }
}