import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import { Weather } from '../../src/client/components/ClosetBoard/Weather.jsx';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
configure({ adapter: new Adapter() });
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router';
import configureStore from 'redux-mock-store';

// TODO: redo tests
describe('Weather', () => {
  const initialState = {
    closet: {
      weather: 'hot'
    }
  };
  const mockStore = configureStore([]);
  var store = mockStore(initialState);

  const wrapper = mount (
    <Provider store={store}>
      <MemoryRouter>
        <Weather />
      </MemoryRouter>
    </Provider>
  );
  it('renders h1 component', () => {
    expect(wrapper.find('h1')).to.have.length(0);
  });
});
