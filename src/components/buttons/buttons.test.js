import React from 'react';
import Buttons from './Buttons';
import {shallow} from 'enzyme';

describe('Testing Buttons', () => {
  const props = {
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
  it('render correctly correctly', () => {
    const editor = shallow(<Buttons banner={props}/>);
    expect(editor).toMatchSnapshot();
  });
});
