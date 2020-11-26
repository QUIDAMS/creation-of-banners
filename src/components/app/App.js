import React, {Component} from 'react';
import Editor from '../editor';

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
        url: ''
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
          enterInformationForBanner={this.enterInformationForBanner}/>
      </div>
    );
  }
}
