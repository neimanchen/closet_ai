import React from 'react';
import { Grid, Input, Button, Modal, Form, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateImageURL } from '../../actions/addItemActions';
import UploadItemInfo from './UploadItemInfo.jsx';
import Axios from 'axios';

export class AddUrl extends React.Component {
  constructor(props) {
    super(props);
    this.updateUrl = this.updateUrl.bind(this);
  }

  updateUrl(e) {
    this.props.actions.updateImageURL(e.target.value)
  }

  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={14}>
          <div className="url">
            <Input
              fluid
              placeholder="Enter a URL"
              onChange={this.updateUrl}
            />
          </div>
        </Grid.Column>
        <Grid.Column>
          <UploadItemInfo />
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  imageURL: state.addItem.url
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateImageURL }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddUrl));