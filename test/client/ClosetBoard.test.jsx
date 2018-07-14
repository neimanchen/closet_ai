import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { ClosetBoard } from '../../src/client/components/ClosetBoard';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });

describe('ClosetBoard', () => {
  it('renders h1 component', () => {
    const wrapper = mount(<ClosetBoard />);
    expect(wrapper.find('h1')).to.have.length(1);
  });
  it('renders a button', () => {
    const wrapper = mount(<ClosetBoard />);
    expect(wrapper.find('button')).to.have.length(1);
  });
});
