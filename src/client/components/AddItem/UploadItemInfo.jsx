import React from 'react';
import { Grid, Modal, Button, Header, Image, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateImageURL } from '../../actions/addItemActions';
import UploadForm from './UploadForm.jsx';
import { getFormValues } from 'redux-form';
import Axios from 'axios';

export class UploadItemInfo extends React.Component {
  constructor(props) {
    super(props)
    this.submitForm = this.submitForm.bind(this);
  }

  submitForm() {
    //TODO: axios call to save to DB
    // pass style.id in params
    var item = {
        brand: this.props.formStates.brand,
        name: this.props.formStates.itemname,
        description: this.props.formStates.description,
        size: this.props.formStates.size,
        url: this.props.imageURL,
        price: this.props.formStates.price,
        category: this.props.formStates.category,
        color: this.props.formStates.color,
        date: new Date(this.props.formStates.date)
      }

    Axios.post('/uploaditem', {
      item: {
        brand: this.props.formStates.brand,
        name: this.props.formStates.itemname,
        description: this.props.formStates.description,
        size: this.props.formStates.size,
        url: this.props.imageURL,
        price: this.props.formStates.price,
        category: this.props.formStates.category,
        color: this.props.formStates.color,
        date: new Date(this.props.formStates.date)
      }
    })
    console.log('item', item)
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
      <Modal
        closeIcon
        closeOnDimmerClick={false}
        trigger={<Button>Upload</Button>}
        style={inlineStyle.modal}
      >
        <Modal.Content image>
          <Image wrapped size='large' src={this.props.imageURL} />
          <Modal.Description>
            <UploadForm onSubmit={this.submitForm} styles={this.props.styles}/>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

const mapStateToProps = state => ({
  imageURL: state.addItem.imageURL,
  styles: state.addItem.styles,
  formStates: getFormValues('Upload')(state)
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateImageURL }, dispatch)
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadItemInfo));