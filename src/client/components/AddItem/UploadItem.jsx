import React from 'react';
import { Grid } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import UploadItemInfo from './UploadItemInfo.jsx';
import Dropzone from 'react-dropzone';
import './styles/dropzone.css'

export class UploadItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Dropzone id="dz" className="default" onDrop={this.handleDrop} multiple={false} onChange={this.fileLog}>
          <div className="dz-text">
            Drag an image to upload
          </div>
        </Dropzone>
      </div>
    );
  }
}

export default withRouter(UploadItem);