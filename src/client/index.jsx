import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/index.jsx';
import ClosetBoard from './components/ClosetBoard/ClosetBoard.jsx';
import MyCloset from './components/MyCloset/MyCloset.jsx';
import CreateOutfits from './components/CreateOutfits/CreateOutfits.jsx';
import Signup from './components/Signup.jsx';
import Login from './components/Login.jsx';
import Header from './components/Header.jsx';
import AddItem from './components/AddItem/AddItem.jsx';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Route,
  withRouter,
} from 'react-router-dom';
import thunk from 'redux-thunk';

const middlewares = [thunk];

if (process.env.NODE_ENV === `development`) {
  const { logger } = require(`redux-logger`);

  middlewares.push(logger);
}

const store = createStore(
  reducers,
  applyMiddleware(...middlewares)
);

const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="DefaultLayout">
        <Header />
        <Component {...matchProps} />
      </div>
    )} />
  )
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Router>
          <Provider store={store}>
            <div className="content container">
              {/*<DefaultLayout path="/" component={ClosetBoard} store={store} />*/}
              <DefaultLayout path="/signup" component={Signup} store={store} />
              <DefaultLayout path="/login" component={Login} store={store} />
              <DefaultLayout path="/mycloset" component={MyCloset} store={store} />
              <DefaultLayout path="/closetboard" component={ClosetBoard} store={store} />
              <DefaultLayout path="/createoutfits" component={CreateOutfits} store={store} />
              <DefaultLayout path="/additem" component={AddItem} store={store} />
            </div>
          </Provider>
        </Router>
      </div>
    )
  }
}

const AppWithRouter = withRouter(App);
ReactDOM.render(<App pathname={location.pathname} />, document.getElementById('root'));
