import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {  Card } from 'semantic-ui-react';
import { updateRecommendedOutfit } from '../../actions/closetBoardActions';
import Outfit from './Outfit.jsx';
import outfits from '../../../database/outfit_data';
import Axios from 'axios';

class RecommendedOutfit extends React.Component {
  constructor(props) {
    super(props);
    this.getRecommendedOutfit = this.getRecommendedOutfit.bind(this);
    this.getRecommendedOutfit();
  }
  componentDidMount() {
    // get recently added outfits from db

  }

  getRecommendedOutfit() {
    Axios.get('/recommendoutfit', {
      params: {
        weather: this.props.weather
      }
    })
      .then(outfit => {
        this.props.actions.updateRecommendedOutfit(outfit);
      })
      .catch(err => { //todo: handle err
        console.log('recommendoutfit error', err);
      });
  }

  getRandomOutfit() {
    Axios.get('/randomoutfit')
      .then(outfit => {
        console.log('outfit', outfit);
        this.props.actions.updateRecommendedOutfit(outfit);
      })
      .catch(err => { //todo: handle err
        console.log('recommendoutfit error', err);
      });
  }

  render() {
    return (
      <Card.Group itemsPerRow={3}>
        <Card centered>
          <Outfit name={outfits[1].name} image={outfits[1].s3_public_url}/>
        </Card>
      </Card.Group>
    );
  };
}

const mapStateToProps = state => ({
  recommendedOutfit: state.closetBoard.recommendedOutfit,
  weather: state.closetBoard.weather
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateRecommendedOutfit }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecommendedOutfit));
