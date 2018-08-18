import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateItem, updateBarcode } from '../../actions/addItemActions';
import { Grid, Input, Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import UploadItemInfo from './UploadItemInfo.jsx';
import Scanner from './Scanner.jsx'
import Axios from 'axios';

export class SearchBarcode extends React.Component {
  constructor(props) {
    super(props);
    this.updateBarcode = this.updateBarcode.bind(this);
    this.getBarcode = this.getBarcode.bind(this);
  }

  updateBarcode(e) {
    this.props.actions.updateBarcode(e.target.value)
  }

  getBarcode() {
    Axios.get('/api/barcode', {
      params: {
        data: this.props.barcode
      }
    })
    .then((response) => {
      this.props.actions.updateItem(response.data.item.matched_items)
    }).catch((error) => {
      this.props.actions.updateItem('There was an error getting your barcode information' + error);
    });
  }

  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={14}>
          <div className="barcode">
            <Input
              fluid
              placeholder="Enter Barcode"
              onChange={this.updateBarcode}
            />
          </div>
        </Grid.Column>
        <Grid.Column>
          <Button onClick={this.getBarcode}>Search barcode</Button>
        </Grid.Column>
        <Scanner />
        <pre>{JSON.stringify(this.props.item, null, 2)}</pre>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  item: state.addItem.item,
  barcode: state.addItem.barcode
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateItem, updateBarcode }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBarcode))