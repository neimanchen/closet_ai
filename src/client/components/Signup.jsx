import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Modal, Label, Grid} from 'semantic-ui-react';
import { Form } from 'formsy-semantic-ui-react';
import { updateFirstName, updateLastName, updateEmail, updateHash, updateGender, updateZip, updateWorkZip, updateBirthDate } from '../actions/userInfoActions';

export class Signup extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(formData) {
    alert(JSON.stringify(formData));
  }

  render() {
    const options = [
      { key: 'm', text: 'Male', value: 'Male' },
      { key: 'f', text: 'Female', value: 'Female' },
      { key: 'b', text: 'Both', value: 'Both' }
    ];

    return (
      <Grid verticalAlign='middle'>
        <Grid.Column style={{ maxWidth: 550 }}>
          <Form
            size="small"
            ref={ ref => this.form = ref }
            onValidSubmit={ this.handleSubmit }
          >
            <Form.Group widths={"equal"}>
              <Form.Input name="firstName"
                fluid
                label="First Name"
                placeholder="First Name" required
                validations="isWords"
                errorLabel={ <Label color="red" pointing/> }
                validationErrors={{
                  isWords: 'No numbers or special characters allowed',
                  isDefaultRequiredValue: 'First Name is required'
                }}
              />
              <Form.Input name="lastName"
                fluid
                label="Last Name"
                placeholder="Last Name" required
                validations="isWords"
                errorLabel={ <Label color="red" pointing/> }
                validationErrors={{
                  isWords: 'No numbers or special characters allowed',
                  isDefaultRequiredValue: 'Last Name is required'
                }}
              />
            </Form.Group>
            <Form.Group widths={"equal"}>
              <Form.Input name="email"
                fluid
                // instantValidation
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
                instantValidation
                label="password"
                placeholder="password" required
                errorLabel={ <Label color="red" pointing/> }
                validationErrors={{
                  isDefaultRequiredValue: 'Password is required'
                }}
              />
            </Form.Group>
            <Form.Group widths={"equal"}>
              <Form.Select name="gender"
                fluid
                label="Clothing Gender Preference"
                options={ options }
                placeholder="Clothing Gender" required
                errorLabel={ <Label color="red" pointing/> }
                validationErrors={{
                  isDefaultRequiredValue: 'Gender is required'
                }}
              />
              <Form.Input name="homeZip"
                fluid
                label="Home Zip"
                placeholder="Home Zip" required
                errorLabel={ <Label color="red" pointing/> }
                validationErrors={{
                  isDefaultRequiredValue: 'Home zip code is required to make location-based recommendations'
                }}
              />
              <Form.Input name="wordZip"
                fluid
                label="Work Zip"
                placeholder="Work Zip" required
                errorLabel={ <Label color="red" pointing/> }
                validationErrors={{
                  isDefaultRequiredValue: 'Work zip code is required to make location-based recommendations'
                }}
              />
            </Form.Group>
            <Form.Checkbox
              name="terms"
              label="I agree to the Terms and Conditions"
            />
            <Form.Group>
              <Form.Button content="Submit" color="green"/>
            </Form.Group>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return ({
    firstName: state.userInfo.firstName,
    lastName: state.userInfo.lastName,
    email: state.userInfo.email,
    hash: state.userInfo.hash,
    gender: state.userInfo.gender,
    zip: state.userInfo.zip,
    workZip: state.userInfo.workZip,
    birthDate: state.userInfo.birthDate
  });
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({
      updateFirstName,
      updateLastName,
      updateEmail,
      updateHash,
      updateGender,
      updateZip,
      updateWorkZip,
      updateBirthDate
    },
    dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Signup))
