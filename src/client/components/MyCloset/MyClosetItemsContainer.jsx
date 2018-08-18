import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import MyItems from './MyItems.jsx';
import { withRouter } from 'react-router-dom';
import MyClosetFilters from './MyClosetFilters.jsx';
import { bindActionCreators } from 'redux';
import Axios from 'axios';
import { itemSeasonsExample } from './ExampleData';
import {
  updateItemBrands,
  updateItemCategories,
  updateItemColors,
  updateItemSeasons,
} from '../../actions/myFilterActions';

import {
  updateSelectedItems,
  updateFilteredState,
  updateAllItems,
} from '../../actions/myClosetActions';


export class MyClosetItemsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.updateFilterStates=this.updateFilterStates.bind(this);
    this.filterAndUpdateItems = this.filterAndUpdateItems.bind(this);
    this.updateFilters = this.updateFilters.bind(this);
    this.getItems = this.getItems.bind(this);
  }

  /*
   *  gets all items from db
   */
  getItems() {
    Axios.get('/getitems')
      .then((response) => {
        let itemsArray = [];
        for (let key in response.data.items) {
          for(let i = 0; i < response.data.items[key].length; i++) {
            itemsArray.push(response.data.items[key][i]);
          }
        }
        return {response, itemsArray};
      }).then((data) => {
      this.props.actions.updateItemCategories(data.response.data.categories);
      this.props.actions.updateItemSeasons(itemSeasonsExample); // temp
      this.props.actions.updateItemColors(data.response.data.colors);
      this.props.actions.updateItemBrands(data.response.data.brands);
      this.props.actions.updateAllItems(data.response.data.items, data.itemsArray);
      this.props.actions.updateSelectedItems(data.response.data.items);
    }).catch((error) => {
      this.props.actions.updateAllItems([]);
      this.props.actions.updateSelectedItems([]);
    });
  }

  /*
   * call gets items on mount
   */
  componentDidMount() {
    this.getItems();
  }

  /*
   * filters items and returns an array of filtered Items
   */
  filterAndUpdateItems(filterValue, filterType, items = this.props.allItemsArray) {
    return new Promise(function(resolve, reject) {
      resolve((items.filter(function(item) {
        if(filterValue.length) {
          return filterValue.indexOf(item[filterType]) !== -1;
        } else {
          return true;
        }
      })));
    });
  }

  /*
   * updates filter options based on the provided items array
   */
  updateFilters(items) {
    let filters;
    let getFilterOptions = () => {
      return new Promise((resolve, reject) => {
        filters = {
          colors: [],
          structuredColors: [],
          seasons: [],
          structuredSeasons: [],
          categories: [],
          structuredCategories: [],
          brands: [],
          structuredBrands: [],
        };
        const filterAndUpdateFilters =(item, filterType, filtersKey, structuredFiltersKey) => {
          if(filters[filtersKey].indexOf(item[filterType]) === -1) {
            filters[filtersKey].push(item[filterType]);
            filters[structuredFiltersKey].push({key: item[filterType], value: item[filterType], text: item[filterType]});
          }
        };
        const addSelectedValuesToFilters = (array, filtersKey, structuredFiltersKey) => {
          array.forEach((filterValue) => {
            if(filters[filtersKey].indexOf(filterValue) === -1) {
              filters[filtersKey].push(filterValue);
              filters[structuredFiltersKey].push({key: filterValue, value: filterValue, text: filterValue});
            }
        })};
        items.forEach(item => {
          filterAndUpdateFilters(item, 'category', 'categories', 'structuredCategories');
          filterAndUpdateFilters(item, 'color', 'colors', 'structuredColors');
          //filterAndUpdateFilters(item, 'season', 'structuredSeasons'); // commented out for now
          filterAndUpdateFilters(item, 'brand', 'brands', 'structuredBrands');
        });
        //  add previously selected options as well
          addSelectedValuesToFilters(this.props.selectedCategories, 'categories', 'structuredCategories');
          addSelectedValuesToFilters(this.props.selectedColors, 'colors', 'structuredColors');
          //addSelectedValuesToFilters(this.props.selectedSeasons, 'seasons', 'structuredSeasons'); // commented out for now
          addSelectedValuesToFilters(this.props.selectedBrands, 'brands', 'structuredBrands');
        resolve(filters);
      });
    };
    getFilterOptions().then((filters) => {
      if (this.props.selectedSeasons.length || this.props.selectedBrands.length || this.props.selectedColors.length) {
        this.props.actions.updateItemCategories(filters.structuredCategories);
      }
      if (this.props.selectedSeasons.length || this.props.selectedBrands.length || this.props.selectedCategories.length) {
        this.props.actions.updateItemColors(filters.structuredColors);
      }
      if (this.props.selectedSeasons.length || this.props.selectedColors.length || this.props.selectedCategories.length) {
        this.props.actions.updateItemBrands(filters.structuredBrands);
      }
      //if(this.props.selectedBrands.length || this.props.selectedColors.length || this.props.selectedCategories.length) {
      //this.props.actions.updateItemSeasons(filters.structuredSeasons); // commented out for now
      //}
    });
  }

  updateFilterStates() {
    if(this.props.selectedSeasons.length || this.props.selectedColors.length
      || this.props.selectedBrands.length || this.props.selectedCategories.length) {
      this.props.actions.updateFilteredState(true);
      let filters = {
        seasons: this.props.selectedSeasons,
        categories: this.props.selectedCategories,
        colors: this.props.selectedColors,
        brands: this.props.selectedBrands,
      };
      this.filterAndUpdateItems(filters.categories, 'category', this.props.allItemsArray)
        .then((filteredItems) => {
          return Promise.resolve(this.filterAndUpdateItems(filters.colors, 'color', filteredItems));
        }).then((filteredItems) => {
          return Promise.resolve(this.filterAndUpdateItems(filters.seasons, 'season', filteredItems));
        }).then((filteredItems) => {
        return Promise.resolve(this.filterAndUpdateItems(filters.brands, 'brand', filteredItems));
      }).then((filteredItems) => {
        this.props.actions.updateSelectedItems(filteredItems).then(this.updateFilters(filteredItems));
      });
    } else {
      this.props.actions.updateFilteredState(false);
      this.getItems();
    }
  }

  render() {
    return (
      <div>
        <MyClosetFilters
          items={this.props.selectedItems}
          updateFilterStates={this.updateFilterStates}
        />
        <MyItems items={this.props.selectedItems} drag={this.props.drag} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentMenuItem: state.closet.currentMenuItem,
  selectedItems: state.closet.selectedItems,
  allItems: state.closet.allItems,
  allItemsArray: state.closet.allItemsArray,
  selectedSeasons: state.filter.selectedSeasons,
  selectedColors: state.filter.selectedItemColors,
  selectedBrands: state.filter.selectedItemBrands,
  selectedCategories: state.filter.selectedItemCategories

});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateAllItems,
    updateSelectedItems,
    updateItemColors,
    updateItemBrands,
    updateItemCategories,
    updateItemSeasons,
    updateFilteredState,
  }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyClosetItemsContainer))
