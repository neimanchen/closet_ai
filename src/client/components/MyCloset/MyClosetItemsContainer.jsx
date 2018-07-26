import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { MyItems } from './MyItems.jsx';
import { withRouter } from 'react-router-dom';
import MyClosetFilters from './MyClosetFilters.jsx';
import { bindActionCreators } from 'redux';
import { allItemsExample , filteredItemsExample } from './ExampleData';
import {
  updateSelectedItems,
  updateFilteredState
} from '../../actions/myClosetActions';


export class MyClosetItemsContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    //get all items from state and update selected items
    this.props.actions.updateSelectedItems(allItemsExample);
  }
  
  render() {
    return (
      <div>
        <MyClosetFilters items={this.props.selectedItems || []} />
        <MyItems items={this.props.selectedItems || []} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMenuItem: state.closet.currentMenuItem,
  selectedItems: state.closet.selectedItems,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateSelectedItems
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyClosetItemsContainer))
