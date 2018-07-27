import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateWeather, updateLocation } from '../../actions/closetBoardActions';
import Axios from 'axios';
import { Segment } from 'semantic-ui-react';

export class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.getLocation = this.getLocation.bind(this);
    this.savePosition = this.savePosition.bind(this);
  }

  componentDidMount() {
    this.getLocation();
  }

  getWeather() {
    Axios.get(`/api/locationkey?lat=${this.props.location.latitude}&lon=${this.props.location.longitude}`)
      .then((response) => {
        this.props.actions.updateWeather(response.data);
      }).catch((err) => {
        this.props.actions.updateWeather('There was an error getting the weather - please try again later');
      });
  }

  getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.savePosition);
    } else {
      this.props.actions.updateLocation({ error: 'Geolocation is not supported by this browser.' });
    }
  }

  savePosition(position) {
    this.props.actions.updateLocation({
      latitude: position.coords.latitude,
      longitude: position.coords.longitude
    });
  }

  render() {
    return (
      <div>
        <Segment>
          {
            this.props.location.error ? this.props.location.error :
              <button onClick={this.getWeather}>Click to get weather</button>
          }
          <pre>{JSON.stringify(this.props.weather, null, 2)}</pre>
        </Segment>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.closetBoard.weather,
  location: state.closetBoard.location
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateWeather, updateLocation }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Weather))
