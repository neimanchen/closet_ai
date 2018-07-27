import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Card } from 'semantic-ui-react';
import { updateRecentlyAddedOutfits } from '../../actions/closetBoardActions';
import Outfit from './Outfit.jsx';
import outfits from '../../../database/outfit_data';

class RecentlyAddedOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.getRecentlyAddedOutfits = this.getRecentlyAddedOutfits.bind(this);
  }
  componentDidMount() {
    // get recently added outfits from db
    this.getRecentlyAddedOutfits();
  }

  getRecentlyAddedOutfits() {
    // mock data
    this.props.actions.updateRecentlyAddedOutfits(outfits);
  }

  render() {
    return (
      <Card.Group itemsPerRow={3}>
        {outfits.map((outfit) => (
            <Outfit key={outfit.id} name={outfit.name} image={outfit.s3_public_url}/>
          )
        )}
      </Card.Group>
    );
  }
}
const mapStateToProps = state => ({
  recentlyAddedOutfits: state.closetBoard.recentlyAddedOutfits
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateRecentlyAddedOutfits }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(RecentlyAddedOutfits));
