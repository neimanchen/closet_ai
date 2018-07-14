import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateWeather } from '../actions/closetBoardActions';
import Axios from 'axios';

export class ClosetBoard extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
  }

  getWeather() {
    Axios.get(`/api/locationkey?lat=30.37&lon=-97.76`).then((response) => {
      this.props.actions.updateWeather(response.data);
    }).catch((err) => {
      this.props.actions.updateWeather('There was an error getting the weather - please try again later');
    });
  }

  render() {
    return (
      <div>
        <h1>Closet Board</h1>
        <button onClick={this.getWeather}>Click to get weather</button>
        <pre>{JSON.stringify(this.props.weather, null, 2)}</pre>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.closetBoard.weather
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateWeather }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClosetBoard))
