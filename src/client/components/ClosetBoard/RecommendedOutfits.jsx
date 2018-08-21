import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Card, Dimmer, Loader, Segment} from 'semantic-ui-react';
import { updateRecommendedOutfits } from '../../actions/closetBoardActions';
import Outfit from './Outfit.jsx';
import Axios from 'axios';

class RecommendedOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.getRecommendedOutfits = this.getRecommendedOutfits.bind(this);
  }
  componentDidUpdate() {
    if (this.props.weather) {
      this.getRecommendedOutfits();
    }
  }

  componentDidMount() {
    if (this.props.weather) {
      this.getRecommendedOutfits();
    }
  }

  getRecommendedOutfits() {
    Axios.get('/recommendoutfits', {
      params: {
        weather: this.props.weather
      }
    })
      .then(outfit => {
        this.props.actions.updateRecommendedOutfits(outfit);
      })
      .catch(err => { //todo: handle err
        console.log('recommendoutfits error', err);
      });
  }

  getRandomOutfits() {
    Axios.get('/randomoutfit')
      .then(outfit => {
        this.props.actions.updateRecommendedOutfits(outfit);
      })
      .catch(err => { //todo: handle err
        console.log('recommendoutfit error', err);
      });
  }

  render() {
    return (
      <Card.Group itemsPerRow={3}>
        <Card fluid={true} centered={true}>
          {
            this.props.recommendedOutfits ?
              <Outfit
                name={this.props.recommendedOutfits.name}
                img={this.props.recommendedOutfits.s3PublicUrl}
              />
              :
              <Segment>
                <Dimmer active>
                  <Loader>Thinking</Loader>
                </Dimmer>
              </Segment>
          }
        </Card>
      </Card.Group>
    );
  };
}

const mapStateToProps = state => ({
  recommendedOutfits: state.closetBoard.recommendedOutfits,
  weather: state.closetBoard.weather,
  location: state.closetBoard.location
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateRecommendedOutfits }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecommendedOutfits));
