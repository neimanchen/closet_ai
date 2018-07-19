import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid } from 'semantic-ui-react';
import {
  updateSelectedMenuItem,
  updateClosetCategories,
  updateOutfitCategories
  } from '../../actions/myClosetActions';
import MyClosetNavBar from './MyClosetNavBar.jsx';
import MyClosetItemsContainer from './MyClosetItemsContainer.jsx';


export class MyCloset extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick=this.handleItemClick.bind(this);
  }

  handleItemClick(e, item) {
    const { name } = item;
    this.props.actions.updateSelectedMenuItem(name);
  }

  componentDidMount() {
    //getCategories from DB
    //TODO: get these from db once we have that setup
    //MOCK DATA
    const closetCategories = ['All Items', 'Work Items Closet', 'Special Items'];
    const outfitCategories = ['All Outfits', 'Work Outfits', 'Special Occasion Outfits'];
    this.props.actions.updateClosetCategories(closetCategories);
    this.props.actions.updateOutfitCategories(outfitCategories);
  }

  render() {
   const { activeItem } = this.props.currentMenuItem || 'MyCloset';

    return (
      <div>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={3}>
              <MyClosetNavBar
                id="navBar"
                handleItemClick={this.handleItemClick}
                activeItem={activeItem}
                closetCategories={this.props.closetCategories || [] }
                outfitCategories={this.props.outfitCategories || []}
              />
            </Grid.Column>
            <Grid.Column width={13}>
              <MyClosetItemsContainer/>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    currentMenuItem: state.closet.currentMenuItem,
    closetCategories: state.closet.closetCategories,
    outfitCategories: state.closet.outfitCategories
  });
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateSelectedMenuItem,
    updateClosetCategories,
    updateOutfitCategories
    },
    dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCloset))
