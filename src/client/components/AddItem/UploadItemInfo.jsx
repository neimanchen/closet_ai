import React from 'react';
import { Grid, Modal, Button, Header, Image, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateImageURL } from '../../actions/addItemActions';
import UploadForm from './UploadForm.jsx';

export class UploadItemInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  submitForm() {
    //TODO: axios call to save to DB
  }

  render() {
    const inlineStyle = {
      modal: {
        top: '50px'
      },
      button: {
        'backgroundColor': 'white'
      }
    };

    return (
      <Modal trigger={<Button>Upload</Button>} style={inlineStyle.modal} >
        <Modal.Content image>
          <Image wrapped size='large' src={this.props.imageURL} />
          <Modal.Description>
            <UploadForm onSubmit={this.submitForm} />
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  imageURL: state.addItem.imageURL
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateImageURL }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadItemInfo));