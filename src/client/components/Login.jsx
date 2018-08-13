import React from 'react'
import {Form, Grid, Label, Segment} from 'semantic-ui-react';
import { Link, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { updateEmail, updateHash } from '../actions/userInfoActions';
import { connect } from 'react-redux';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(formData) {
  }

  render() {
    return (
      <Grid verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Form
            size="small"
            ref={ ref => this.form = ref }
            onValidSubmit={ this.handleSubmit }
          >
            <Form.Input name="email"
              fluid
              label="Email"
              placeholder="Email" required
              validations="isEmail"
              errorLabel={ <Label color="red" pointing/> }
              validationErrors={{
                isEmail: 'Not a valid email',
                isDefaultRequiredValue: 'Email is required'
              }}
            />
            <Form.Input name="password"
              fluid
              label="password"
              placeholder="password" required
              errorLabel={ <Label color="red" pointing/> }
              validationErrors={{
                isDefaultRequiredValue: 'Password is required'
              }}
            />
            <Form.Button content='Login' color='green' />
          </Form>
          <Segment>
            No login? <Link className='signup' to='/signup'>Sign Up</Link>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return ({
    email: state.userInfo.email,
    hash: state.userInfo.hash
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      updateEmail,
      updateHash
    },
    dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
