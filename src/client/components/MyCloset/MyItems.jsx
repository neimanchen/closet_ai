import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import Item from './Item.jsx';


export class MyItems extends React.Component {
  constructor(props) {
    super(props);
    this.filteredView = this.filteredView.bind(this);
    this.notFilteredView = this.notFilteredView.bind(this);
  }

  filteredView() {
    return (
      <Grid.Row verticalAlign="middle">
        {this.props.items.map((item) => (
          <Grid.Column key={item.id} mobile={16} computer={5} tablet={8} widescreen={5} largeScreen={5}>
            <Item key={item.id} url={item.url} name={item.name} category={item.category} brand={item.brand}/>
          </Grid.Column>
        ))}
      </Grid.Row>
    )
  }

  notFilteredView() {
    return (
      this.props.categories.map((category) =>
        (this.props.items[category.text]) ?
          <Grid>
            <Grid.Row verticalAlign="middle">
              <h2 key={category.key}>{category.text}</h2>
            </Grid.Row>
            <Grid.Row verticalAlign="middle">
              {this.props.items[category.text].map((item) => (
                <Grid.Column key={item.id} mobile={16} computer={5} tablet={8} widescreen={5} largeScreen={5}>
                  <Item key={item.id} url={item.url} name={item.name} category={item.category} brand={item.brand}/>
                </Grid.Column >
              ))}
            </Grid.Row>
          </Grid>
          : null
      )
    )
  }

  render() {
    return (
      <Grid padded divided='vertically'>
        {(this.props.items) ?
          ((Array.isArray(this.props.items)) ? this.filteredView() : this.notFilteredView())
          : (<div>{"Loading..."}</div>)
        }
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  selectedSeasons: state.closet.selectedSeasons,
  selectedColors: state.closet.selectedItemColors,
  selectedBrands: state.closet.selectedItemBrands,
  selectedCategories: state.closet.selectedItemCategories,
  isFiltered: state.closet.isFiltered,
  categories: state.closet.itemCategories || [],
});

MyItems.propTypes  = {
  items: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ]),
  categories: PropTypes.array
};

export default withRouter(connect(mapStateToProps)(MyItems));
