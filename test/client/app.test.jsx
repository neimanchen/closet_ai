import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import App from '../../src/client/app';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('App', () => {
  it('renders one App component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.title')).to.have.length(1);
  });
});
