import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Header, Grid } from 'semantic-ui-react';
import Weather from './Weather.jsx';
import RecentlyAddedOutfits from './RecentlyAddedOutfits.jsx';
import RecommendedOutfit from './RecommendedOutfit.jsx';
import UnwornItems from './UnwornItems.jsx'
import unwornItems from '../../../database/unworn_data';
import { updateWeather, updateUnwornItems } from '../../actions/closetBoardActions';
import Axios from 'axios/index';

export class ClosetBoard extends React.Component {
  constructor(props) {
    super(props);
    this.getWeather = this.getWeather.bind(this);
    this.props.actions.updateUnwornItems(unwornItems);
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
      <Grid columns={2} verticalAlign='middle' divided>
        <Grid.Row verticalAlign='middle' stretched>
          <Grid.Column>
            <Header> Today's Recommended Outfit </Header>
            <RecommendedOutfit id='recommendedOutfit'/>
          </Grid.Column>
          <Grid.Column>
            <Header> Weather </Header>
            <Weather id='weather' getWeather={this.getWeather}/>
          </Grid.Column>
        </Grid.Row>
        <Grid.Row verticalAlign='middle' stretched>
          <Grid.Column>
            <Header> Recently Added Outfits </Header>
            <RecentlyAddedOutfits id='recentlyAddedOutfits'/>
          </Grid.Column>
          <Grid.Column>
            <Header> Items Not Worn Lately </Header>
            <UnwornItems id='unwornItems'/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.closetBoard.weather
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateWeather, updateUnwornItems }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ClosetBoard));
