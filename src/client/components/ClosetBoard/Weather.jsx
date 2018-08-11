import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateWeather, updateLocation } from '../../actions/closetBoardActions';
import { Segment } from 'semantic-ui-react';
import Axios from 'axios';
import weatherOptions from './weatherOptions.js';
import iconMap from './iconMap.js';

const queryURL = 'https://query.yahooapis.com/v1/public/yql?q=';
const queryFormat = '&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

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
    const query = `select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(${this.props.location.latitude}%2C${this.props.location.longitude})%22)`;
    Axios.get(queryURL + query + queryFormat)
      .then((response) => {
        var weatherData = response.data.query.results.channel;
        var location = weatherData.location
        var forecast = weatherData.item.forecast;
        this.props.actions.updateWeather({
          weatherOption: weatherOptions[forecast[0].code] || weatherOptions.default,
          low: forecast[0].low,
          high: forecast[0].high,
          city: location.city,
          text: forecast[0].text
        });
      }).catch((err) => {
        this.props.actions.updateWeather('There was an error getting the weather - please try again later: ' + err);
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
    this.getWeather();
  }

  render() {
    if (this.props.location.error) {
      return this.props.location.error;
    }
    if (!this.props.weather) {
      return 'Checking the weather...'
    }
    let weather = this.props.weather;
    let Icon = iconMap[this.props.weather.weatherOption] || iconMap.default;
    return (
      <Segment.Group horizontal>
        <Segment>
          <Icon />
        </Segment>
        <Segment>
          <p>{weather.city}</p>
          <p>Low: {weather.low}°F</p>
          <p>High: {weather.high}°F</p>
          <p>{weather.text}</p>
        </Segment>
      </Segment.Group >
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
