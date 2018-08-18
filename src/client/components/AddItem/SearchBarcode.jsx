import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { updateItem } from '../../actions/addItemActions';
import { Grid, Input, Button, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import UploadItemInfo from './UploadItemInfo.jsx';
import Scanner from './Scanner.jsx'
import Axios from 'axios';

export class SearchBarcode extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={14}>
          <Scanner />
        </Grid.Column>
        <Scanner />
        <pre>{JSON.stringify(this.props.item, null, 2)}</pre>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  item: state.addItem.item
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateItem }, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchBarcode))