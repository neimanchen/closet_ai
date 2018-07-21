import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Grid, Button} from 'semantic-ui-react';
import Item from './Item.jsx';


export class MyItems extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid padded divided='vertically'>
        <Grid.Row verticalAlign="middle">
          {this.props.items.map((item) => (
            <Grid.Column key={item.id} mobile={16} computer={5} tablet={8} widescreen={5} largeScreen={5}>
              <Item key={item.id} url={item.url} name={item.name} category={item.category} brand={item.brand}/>
            </Grid.Column>
          ))}
        </Grid.Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => ({
  selectedSeasons: state.closet.selectedSeasons,
  selectedColors: state.closet.selectedItemColors,
  selectedBrands: state.closet.selectedItemBrands,
  selectedCategories: state.closet.selectedItemCategories,
  selectedItems: state.closet.selectedItems
});

MyItems.propTypes  = {
  items: PropTypes.array.isRequired
};

export default withRouter(connect(mapStateToProps)(MyItems));
