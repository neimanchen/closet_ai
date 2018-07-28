import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Button} from 'semantic-ui-react';
import DropdownSearchSelection from '../DropdownSearch.jsx';
import {
  updateSelectedSeasons,
  updateSelectedColors,
  updateSelectedCategories,
  updateSelectedBrands,
  updateFilteredState,
  updateSelectedItems
} from '../../actions/myClosetActions';


export class MyClosetFilters extends React.Component {
  constructor(props) {
    super(props);
    this.clearAllFilters = this.clearAllFilters.bind(this);
  }

  componentDidMount() {
    //MOCK DATA
    this.clearAllFilters();
  }

  clearAllFilters() {
    this.props.actions.updateSelectedSeasons([]);
    this.props.actions.updateSelectedBrands([]);
    this.props.actions.updateSelectedColors([]);
    this.props.actions.updateSelectedCategories([]);
    this.props.actions.updateFilteredState(false);
    //TODO: need to make an api call to get all items
    this.props.actions.updateSelectedItems(this.props.items);
  }

  render(){
    return (
      <Grid padded>
        <Grid.Row centered>
          <Grid.Column mobile={16} computer={5} tablet={8} widescreen={3} largeScreen={3}>
            <DropdownSearchSelection
              value={this.props.selectedSeasons || []}
              id="seasonFilter"
              options={this.props.seasons}
              text='Filter by season'
              onChange={(e, data) => {
                this.props.actions.updateSelectedSeasons(data.value);
              }} />
          </Grid.Column>
          <Grid.Column mobile={16} computer={5} tablet={8} widescreen={3} largeScreen={3}>
            <DropdownSearchSelection
              value={this.props.selectedCategories || []}
              id="categoryFilter"
              options={this.props.categories}
              text='Filter by category'
              onChange={(e, data) => {
                this.props.actions.updateSelectedCategories(data.value);
              }}/>
          </Grid.Column>
          <Grid.Column mobile={16} computer={5} tablet={8} widescreen={3} largeScreen={3}>
            <DropdownSearchSelection
              value={this.props.selectedColors || []}
              id="colorFilter"
              options={this.props.colors}
              text='Filter by color'
              onChange={(e, data) => {
                this.props.actions.updateSelectedColors(data.value);
              }}/>
          </Grid.Column>
          <Grid.Column mobile={16} computer={5} tablet={8} widescreen={3} largeScreen={3}>
            <DropdownSearchSelection
              value={this.props.selectedBrands || []}
              id="brandFilter"
              options={this.props.brands}
              text='Filter by brand'
              onChange={(e, data) => {
                this.props.actions.updateSelectedBrands(data.value);
              }}/>
          </Grid.Column>
          <Grid.Column mobile={16} computer={2} tablet={2} widescreen={2} largeScreen={2} >
            <Button basic color='red' onClick={this.clearAllFilters}>
              Reset
            </Button>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  selectedSeasons: state.closet.selectedSeasons,
  selectedColors: state.closet.selectedItemColors,
  selectedBrands: state.closet.selectedItemBrands,
  selectedCategories: state.closet.selectedItemCategories
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateSelectedSeasons,
    updateSelectedColors,
    updateSelectedCategories,
    updateSelectedBrands,
    updateFilteredState,
    updateSelectedItems,
    },
    dispatch)
});

MyClosetFilters.propTypes  = {
  brands: PropTypes.array,
  colors: PropTypes.array,
  categories: PropTypes.array,
  seasons: PropTypes.array,
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  selectedSeasons: PropTypes.array,
  selectedColors:PropTypes.array,
  selectedBrands: PropTypes.array,
  selectedCategories: PropTypes.array,
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MyClosetFilters));
