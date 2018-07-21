import React from 'react';
import { Grid, Modal, Button, Header, Image, Form } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

export class UploadItemInfo extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const inlineStyle = {
      modal : {
        top: '50px'
      },
      button: {
        'backgroundColor': 'white'
      }
    };

    return (
      <Modal trigger={<Button>Upload</Button>} style={inlineStyle.modal}>
        <Modal.Content image>
          <Image wrapped size='large' src='https://getonfleek.com/wp-content/uploads/2017/04/emoji-poop-joggers.png' />
          <Modal.Description>
            <Form>
              <Form.Field>
                <label>Brand</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Category</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Color</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Size</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Season</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Price</label>
                <input />
              </Form.Field>
              <Form.Field>
                <label>Date Purchased</label>
                <input />
              </Form.Field>
              <Button content="Cancel" />
              <Button content="Save" />
            </Form>
          </Modal.Description>
        </Modal.Content>
      </Modal>
    )
  }
}

export default withRouter(UploadItemInfo);