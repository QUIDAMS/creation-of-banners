import React from 'react';
import Editor from './Editor';
import {shallow} from 'enzyme';

describe('Testing Editor', () => {
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
  it('rendered correctly', () => {
    const editor = shallow(<Editor banner={props}/>);
    expect(editor).toMatchSnapshot();
  });
});
