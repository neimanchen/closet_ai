import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { MyCloset } from '../../src/client/components/MyCloset';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import { MemoryRouter } from 'react-router';

describe('MyCloset', () => {
  const wrapper = mount(
    <MemoryRouter>
      <MyCloset />
    </MemoryRouter>
  );

  it('renders navBar component', () => {
    expect(wrapper.find('#navBar').exists()).to.equal(true);
  });
});
