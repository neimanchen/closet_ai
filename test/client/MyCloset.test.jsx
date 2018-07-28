import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import { MemoryRouter } from 'react-router';

describe('MyCloset', () => {

  jest.doMock('../../src/client/components/MyCloset/MyClosetItemsContainer.jsx', () => {
    return () => <div />;
  });

  const ComponentToTest = require('../../src/client/components/MyCloset/MyCloset.jsx').default;

  const initialState = {
    closet: {
      currentMenuItem: 'All Items'
    },
  };
  const mockStore = configureStore([]);
  var store = mockStore(initialState);

  const wrapper = mount (
    <Provider store={store}>
      <MemoryRouter>
        <ComponentToTest />
      </MemoryRouter>
    </Provider>
  );

  it('renders navBar component', () => {
    expect(wrapper.find('#navBar').exists()).to.equal(true);
  });
});
