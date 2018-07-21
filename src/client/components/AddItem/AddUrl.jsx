import React from 'react';
import { Grid, Input, Button, Modal, Form, Image } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import UploadItemInfo from './UploadItemInfo.jsx';

export class AddUrl extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid columns="equal">
        <Grid.Column width={14}>
          <div className="url">
            <Input fluid placeholder="Enter a URL" />
          </div>
        </Grid.Column>
        <Grid.Column>
          <UploadItemInfo />
        </Grid.Column>
      </Grid>
    )
  }
}

export default withRouter(AddUrl);