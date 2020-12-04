import React from 'react';
import Preview from './Preview';
import {shallow} from 'enzyme';

describe('Testing Preview', () => {
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
    const editor = shallow(<Preview banner={props}/>);
    expect(editor).toMatchSnapshot();
  });
});
