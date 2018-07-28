import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { MyItems } from './MyItems.jsx';
import { withRouter } from 'react-router-dom';
import MyClosetFilters from './MyClosetFilters.jsx';
import { bindActionCreators } from 'redux';
import {
  allItemsExample, filteredItemsExample, itemBrandsExample,
  itemCategoriesExample, itemColorsExample, itemSeasonsExample,
} from './ExampleData';
import {
  updateItemBrands,
  updateItemCategories,
  updateItemColors,
  updateItemSeasons,
} from '../../actions/myFilterActions';

import {
  updateSelectedItems,
  updateFilteredState
} from '../../actions/myClosetActions';


export class MyClosetItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilterOptions = this.updateFilterOptions.bind(this);
    this.updateFilterStates=this.updateFilterStates.bind(this);
  }

  componentDidMount() {
    //get all items from state and update selected items
    this.props.actions.updateSelectedItems(allItemsExample);
    this.updateFilterOptions();
  }

  componentDidUpdate() {
    this.updateFilterStates();
  }

  updateFilterStates() {
    if(this.props.selectedSeasons.length || this.props.selectedColors.length
      || this.props.selectedBrands.length || this.props.selectedCategories.length) {
      this.props.actions.updateFilteredState(true);
      //TODO: make an api call to fetch filtered items
      this.props.actions.updateSelectedItems(filteredItemsExample);
    } else {
      this.props.actions.updateFilteredState(false);
      this.props.actions.updateSelectedItems(allItemsExample);
    }
  }

  updateFilterOptions() {
    this.props.actions.updateItemCategories(itemCategoriesExample);
    this.props.actions.updateItemColors(itemColorsExample);
    this.props.actions.updateItemBrands(itemBrandsExample);
    this.props.actions.updateItemSeasons(itemSeasonsExample);
  }

  render() {
    return (
      <div>
        <MyClosetFilters
          items={this.props.selectedItems}
          categories={this.props.categories}
          colors={this.props.colors}
          brands={this.props.brands}
          seasons={this.props.seasons}
        />
        <MyItems items={this.props.selectedItems} categories={this.props.categories}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMenuItem: state.closet.currentMenuItem,
  selectedItems: state.closet.selectedItems,
  categories: state.filter.itemCategories,
  brands: state.filter.itemBrands,
  colors: state.filter.itemColors,
  seasons: state.filter.itemSeasons,
  selectedSeasons: state.filter.selectedSeasons,
  selectedColors: state.filter.selectedItemColors,
  selectedBrands: state.filter.selectedItemBrands,
  selectedCategories: state.filter.selectedItemCategories

});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateSelectedItems,
    updateItemColors,
    updateItemBrands,
    updateItemCategories,
    updateItemSeasons,
    updateFilteredState
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyClosetItemsContainer))
