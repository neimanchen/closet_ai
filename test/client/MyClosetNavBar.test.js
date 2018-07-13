import React from 'react';
import { assert, expect, should } from 'chai';
import { mount } from 'enzyme';
import MyClosetNavBar from '../../src/client/components/MyClosetNavBar';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import { MemoryRouter } from 'react-router';

describe('MyClosetNavBar', () => {
  const closetCategories = ['1', '2', '3'];
  const outfitCategories = ['1', '2'];
  const wrapper = mount(
    <MemoryRouter>
      <MyClosetNavBar closetCategories={closetCategories} outfitCategories={outfitCategories}/>
    </MemoryRouter>
  );

  it('renders menu', () => {
    expect(wrapper.find('#myCloset').exists()).to.equal(true);
  });

  it('renders all closetCategories', () => {
    expect(wrapper.find('a#closetCategory').length).to.equal(3);
  });

  it('renders all outfitCategories', () => {
    expect(wrapper.find('a#outfitCategory').length).to.equal(2);
  });
});

