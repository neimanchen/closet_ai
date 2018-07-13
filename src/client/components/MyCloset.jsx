import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateSelectedMenuItem } from '../actions/myClosetActions';
import { MyClosetNavBar } from './MyClosetNavBar.jsx';


export class MyCloset extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemClick=this.handleItemClick.bind(this);
  }

  handleItemClick(e, item) {
    const { name } = item;
    this.props.actions.updateSelectedMenuItem(name);
  }

  render() {
    const { activeItem } = this.props.currentMenuItem || 'MyCloset';

    //TODO: get these from db once we have that setup
    const closetCategories = ['All Items', 'Some Other Closet'];
    const outfitCategories = ['All Outfits', 'Work Outfits', 'Special Occasion Outfits'];

    return (
      <div>
        <MyClosetNavBar
          id="navBar"
          handleItemClick={this.handleItemClick}
          activeItem={activeItem}
          closetCategories={closetCategories}
          outfitCategories={outfitCategories}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMenuItem: state.closet.currentMenuItem
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({updateSelectedMenuItem}, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyCloset))
