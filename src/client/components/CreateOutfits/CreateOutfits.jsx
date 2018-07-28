import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Card } from 'semantic-ui-react';
import MyClosetFilters from '../MyCloset/MyClosetFilters.jsx';
import { updateSelectedOutfitItems } from '../../actions/createOutfitsActions.js'
import {itemBrandsExample, itemCategoriesExample, itemColorsExample, itemSeasonsExample} from "../MyCloset/ExampleData";
import {
  updateItemBrands,
  updateItemCategories,
  updateItemColors,
  updateItemSeasons
} from "../../actions/myFilterActions";

var items = [
  { name: 'item0', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/12/04/thumb-img/1513712491220519733.jpg' },
  { name: 'item1', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/12/29/thumb-img/1515116757005411731.jpg' },
  { name: 'item2', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/05/18/thumb-img/1527199688440385255.jpg' },
  { name: 'item3', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/06/07/thumb-img/1528392959370204766.jpg' },
  { name: 'item4', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/04/11/thumb-img/1526237886772449228.jpg' },
  { name: 'item5', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/05/29/thumb-img/1529364716410796585.jpg' },
  { name: 'item6', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/07/22/thumb-img/1512782542727968965.jpg' },
  { name: 'item7', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2018/04/28/thumb-img/1525195089721673717.jpg' },
  { name: 'item8', src: 'https://gloimg.zafcdn.com/zaful/pdm-product-pic/Clothing/2017/11/29/thumb-img/1529603019998241585.jpg' }
]

export class CreateOutfits extends React.Component {
  constructor(props) {
    super(props);
    this.onDrop = this.onDrop.bind(this);
    this.updateFilterOptions=this.updateFilterOptions.bind(this);
  }

  componentDidMount() {
    this.updateFilterOptions();
  }

  updateFilterOptions() {
    this.props.actions.updateItemCategories(itemCategoriesExample);
    this.props.actions.updateItemColors(itemColorsExample);
    this.props.actions.updateItemBrands(itemBrandsExample);
    this.props.actions.updateItemSeasons(itemSeasonsExample);
  }

  onDragStart(event, id) {
    event.dataTransfer.setData("id", id);
  }

  onDrop(event) {
    let id = event.dataTransfer.getData("id");
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
              <Card onDragOver={(e) => e.preventDefault()} onDrop={this.onDrop}>
                {this.props.selectedItems.length === 0 ? 'Drag items here!' : this.props.selectedItems.map((item) => {
                  return <img src={items[item].src} key={'item' + item} />;
                })}
              </Card>
            </Grid.Column>
            <Grid.Column width={10}>
              <MyClosetFilters
                categories={this.props.categories}
                colors={this.props.colors}
                brands={this.props.brands}
                seasons={this.props.seasons}
              />
              <Grid>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 0)} src={items[0].src} draggable />
                  </Grid.Column>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 1)} src={items[1].src} draggable />
                  </Grid.Column>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 2)} src={items[2].src} draggable />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 3)} src={items[3].src} draggable />
                  </Grid.Column>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 4)} src={items[4].src} draggable />
                  </Grid.Column>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 5)} src={items[5].src} draggable />
                  </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={3}>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 6)} src={items[6].src} draggable />
                  </Grid.Column>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 7)} src={items[7].src} draggable />
                  </Grid.Column>
                  <Grid.Column>
                    <img onDragStart={(e) => this.onDragStart(e, 8)} src={items[8].src} draggable />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    selectedItems: state.createOutfits.selectedItems,
    categories: state.filter.itemCategories,
    brands: state.filter.itemBrands,
    colors: state.filter.itemColors,
    seasons: state.filter.itemSeasons,
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
    updateSelectedOutfitItems,
      updateItemColors,
      updateItemBrands,
      updateItemCategories,
      updateItemSeasons,
  },
    dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CreateOutfits))
