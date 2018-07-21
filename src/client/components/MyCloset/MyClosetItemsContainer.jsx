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
    this.filterItems=this.filterItems.bind(this);
  }

  componentDidMount() {
    //get items from db based on filters
    this.props.actions.updateFilteredState(false);
    this.props.actions.updateSelectedItems(allItemsExample);
  }

  filterItems() {
    //get items from db based on filters
    this.props.actions.updateFilteredState(true);
    this.props.actions.updateSelectedItems(filteredItemsExample);
  }

  render() {
    return (
      <div>
        <MyClosetFilters filterItems={this.filterItems} />
        <MyItems items={this.props.selectedItems || []} isFiltered={this.props.isFiltered} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMenuItem: state.closet.currentMenuItem,
  selectedItems: state.closet.selectedItems,
  isFiltered: state.closet.filteredState
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateSelectedItems,
    updateFilteredState
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyClosetItemsContainer))
