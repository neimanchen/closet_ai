import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import  MyCloset  from '../../src/client/components/MyCloset/MyCloset';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import { MemoryRouter } from 'react-router';

describe('MyCloset', () => {
  const initialState = {
    closet: {
      currentMenuItem: 'All Items'
    }
  };
  const mockStore = configureStore([]);
  var store = mockStore(initialState);

  const wrapper = mount (
    <Provider store={store}>
      <MemoryRouter>
        <MyCloset />
      </MemoryRouter>
    </Provider>
  );

  it('renders navBar component', () => {
    expect(wrapper.find('#navBar').exists()).to.equal(true);
  });
});
