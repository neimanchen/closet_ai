import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Button} from 'semantic-ui-react';
import DropdownSearchSelection from '../DropdownSearch.jsx';
import {
  updateItemColors,
  updateItemBrands,
  updateItemCategories,
  updateItemSeasons,
  updateSelectedSeasons,
  updateSelectedColors,
  updateSelectedCategories,
  updateSelectedBrands
} from '../../actions/myClosetActions';


export class MyClosetFilters extends React.Component {
  constructor(props) {
    super(props);
    this.clearAllDropdowns=this.clearAllDropdowns.bind(this);
  }

  componentDidMount() {
    //MOCK DATA
    const itemColors = [
      {key: 'Blue', value: 'Blue', text: 'Blue'},
      {key: 'Black', value: 'Black', text: 'Black'},
      {key: 'White', value: 'White', text: 'White'},
      {key: 'Yellow', value: 'Yellow', text: 'Yellow'},
      {key: 'Pink', value: 'Pink', text: 'Pink'},
      {key: 'Purple', value: 'Purple', text: 'Purple'},
      {key: 'Brown', value: 'Brown', text: 'Brown'},
      {key: 'Red', value: 'Red', text: 'Red'},
      {key: 'Green', value: 'Green', text: 'Green'}
    ];
    const itemBrands = [
      {key: 'Armani', value: 'Armani', text: 'Armani'},
      {key: 'AE', value: 'AE', text: 'AE'},
      {key: 'Calvin Klein', value: 'Calvin Klein', text: 'Calvin Klein'},
      {key: 'Louis Vuitton', value: 'Louis Vuitton', text: 'Louis Vuitton'},
      {key: 'Levi\'s', value: 'Levi\'s', text: 'Levi\'s'},
      {key: 'Salvatore Ferragamo', value: 'Salvatore Ferragamo', text: 'Salvatore Ferragamo'}
    ];
    const itemSeasons = [{key: 'Summer', value: 'Summer', text: 'Summer'},
      {key: 'Fall', value: 'Fall', text: 'Fall'},
      {key: 'Winter', value: 'Winter', text: 'Winter'},
      {key: 'Spring', value: 'Spring', text: 'Spring'}
    ];
    const itemCategories= [
      {key: 'Shirt', value: 'Shirt', text: 'Shirt'},
      {key: 'Pants', value: 'Pants', text: 'Pants'},
      {key: 'Skirt', value: 'Skirt', text: 'Skirt'},
    ];
    this.props.actions.updateItemColors(itemColors);
    this.props.actions.updateItemBrands(itemBrands);
    this.props.actions.updateItemSeasons(itemSeasons);
    this.props.actions.updateItemCategories(itemCategories);
  }

  clearAllDropdowns() {
    this.props.actions.updateSelectedSeasons([]);
    this.props.actions.updateSelectedBrands([]);
    this.props.actions.updateSelectedColors([]);
    this.props.actions.updateSelectedCategories([]);
  }

  render(){
    const brands = this.props.brands || [];
    const colors = this.props.colors || [];
    const categories = this.props.categories || [];
    const seasons = this.props.seasons || [];
    return (
      <Grid padded>
        <Grid.Row>
          <Grid.Column width={3}>
            <DropdownSearchSelection value={this.props.selectedSeasons || []} id="seasonFilter" options={seasons} text='Filter by season' onChange={(e, data) => this.props.actions.updateSelectedSeasons(data.value)}/>
          </Grid.Column>
          <Grid.Column width={3}>
            <DropdownSearchSelection value={this.props.selectedCategories || []} id="categoryFilter" options={categories} text='Filter by category' onChange={(e, data) => this.props.actions.updateSelectedCategories(data.value)}/>
          </Grid.Column>
          <Grid.Column width={3}>
            <DropdownSearchSelection value={this.props.selectedColors || []} id="colorFilter" options={colors} text='Filter by color' onChange={(e, data) => this.props.actions.updateSelectedColors(data.value)}/>
          </Grid.Column>
          <Grid.Column width={3}>
            <DropdownSearchSelection value={this.props.selectedBrands || []} id="brandFilter" options={brands} text='Filter by brand' onChange={(e, data) => this.props.actions.updateSelectedBrands(data.value)}/>
          </Grid.Column>
          <Grid.Column>
            <Button basic color='red' onClick={this.clearAllDropdowns}>
              Reset
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  seasons: state.closet.itemSeasons,
  categories: state.closet.itemCategories,
  colors: state.closet.itemColors,
  brands: state.closet.itemBrands,
  selectedSeasons: state.closet.selectedSeasons,
  selectedColors: state.closet.selectedItemColors,
  selectedBrands: state.closet.selectedItemBrands,
  selectedCategories: state.closet.selectedItemCategories
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateItemColors,
    updateItemBrands,
    updateItemCategories,
    updateItemSeasons,
    updateSelectedSeasons,
    updateSelectedColors,
    updateSelectedCategories,
    updateSelectedBrands
    },
    dispatch)
});

MyClosetFilters.propTypes  = {
    brands: PropTypes.array,
    colors: PropTypes.array,
    categories: PropTypes.array,
    seasons: PropTypes.array
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyClosetFilters));
