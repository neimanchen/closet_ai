import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MyCloset } from '../../src/client/components/MyCloset';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('MyCloset', () => {
  it('renders h1 component', () => {
    const wrapper = mount(<MyCloset />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
});
