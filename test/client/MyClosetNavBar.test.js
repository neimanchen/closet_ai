import React from 'react';
import { assert, expect, should } from 'chai';
import { mount } from 'enzyme';
import MyClosetNavBar from '../../src/client/components/MyCloset/MyClosetNavBar';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import { MemoryRouter } from 'react-router';
import configureStore from "redux-mock-store";

describe('MyClosetNavBar', () => {
    let wrapper;

  beforeAll(() => {
    const closetCategories = ['1', '2', '3'];
    const outfitCategories = ['1', '2'];
    const initialState = {
      closet: {
        currentMenuItem: 'All Items',
        itemCategories: [],
      }
    };
    const mockStore = configureStore([]);
    var store = mockStore(initialState);

    wrapper = mount(
      <MemoryRouter>
        <MyClosetNavBar closetCategories={closetCategories} outfitCategories={outfitCategories}/>
      </MemoryRouter>
    );
  });

  it('renders menu', () => {
    expect(wrapper.find('#myCloset').exists()).to.equal(true);
  });

  it('renders all closetCategories', () => {
    expect(wrapper.find('div#closetCategory').length).to.equal(3);
  });

  it('renders all outfitCategories', () => {
    expect(wrapper.find('div#outfitCategory').length).to.equal(2);
  });
});

