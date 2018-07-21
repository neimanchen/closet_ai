import React from 'react';
import { Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import UploadItemInfo from './UploadItemInfo.jsx';

export class UploadItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid.Row>
        <Grid.Column>
          <div id="dz" className="default">
            <div className="dz-text">Drag an image to upload</div>
            <UploadItemInfo />
          </div>
        </Grid.Column>
      </Grid.Row>
    )
  }
}

export default withRouter(UploadItem);


