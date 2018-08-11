import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Card } from 'semantic-ui-react';
import MyClosetItemsContainer from '../MyCloset/MyClosetItemsContainer.jsx';
import { updateSelectedOutfitItems } from '../../actions/createOutfitsActions.js'

import {
  itemBrandsExample,
  itemCategoriesExample,
  itemColorsExample,
  itemSeasonsExample
} from '../MyCloset/ExampleData';

export class CreateOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(event) {
    let id = event.dataTransfer.getData('id');
    if (!this.props.selectedItems.includes(id)) {
      var newSelectedItems = this.props.selectedItems.slice();
      newSelectedItems.push(id);
      this.props.actions.updateSelectedOutfitItems(newSelectedItems);
    }
  }

  render() {
    return (
      <div>
        <Grid padded>
          <Grid.Row>
            <Grid.Column width={6} stretched>
              <Card onDragOver={e => e.preventDefault()} onDrop={this.onDrop}>
                {
                  this.props.selectedItems.length === 0
                    ? 'Drag items here!'
                    : this.props.selectedItems.map((id, i) => (
                      <div key={"createOutfitItem" + i}>
                        {`Grab item with id ${id} and show here`}
                      </div>
                    ))
                }
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <MyClosetItemsContainer drag />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    selectedItems: state.createOutfits.selectedItems
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateSelectedOutfitItems }, dispatch)
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CreateOutfits)
);
