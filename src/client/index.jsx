import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.jsx';
import MyCloset from './components/MyCloset.jsx';
import ClosetBoard from './components/ClosetBoard.jsx';
import { Provider } from 'react-redux';

const middlewares = [];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

import {
  BrowserRouter as Router,
  Route,
  withRouter,
} from 'react-router-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div>
        <Router>
          <Provider store={store}>
          <div className="content container">
            <Route path="/mycloset" component={MyCloset} store={store}/>
            <Route path="/closetboard" component={ClosetBoard} store={store}/>
          </div>
          </Provider>
        </Router>
      </div>
    )
  }
}

const AppWithRouter = withRouter(App);
ReactDOM.render(<App pathname={location.pathname}/>, document.getElementById('root'));
