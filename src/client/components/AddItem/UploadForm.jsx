import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from 'react-router-dom';
import { Form, Button } from 'semantic-ui-react';

const UploadForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  return (
    <Form onSubmit={handleSubmit}>
      <div>
        <label>Brand</label>
        <div>
          <Field
            name="brand"
            component="input"
            type="text"
            placeholder="Brand"
          />
        </div>
      </div>
      <div>
        <label>Category</label>
        <div>
          <Field
            name="category"
            component="input"
            type="text"
            placeholder="Category"
          />
        </div>
      </div>
      <div>
        <label>Color</label>
        <div>
          <Field
            name="color"
            component="input"
            type="text"
            placeholder="Color"
          />
        </div>
      </div>
      <div>
        <label>Size</label>
        <div>
          <Field
            name="size"
            component="input"
            type="text"
            placeholder="Size"
          />
        </div>
      </div>
      <div>
        <label>Season</label>
        <div>
          <Field
            name="season"
            component="input"
            type="text"
            placeholder="Season"
          />
        </div>
      </div>
      <div>
        <label>Price</label>
        <div>
          <Field
            name="price"
            component="input"
            type="text"
            placeholder="Price"
          />
        </div>
      </div>
      <div>
        <label>Date Purchased</label>
        <div>
          <Field
            name="date"
            component="input"
            type="text"
            placeholder="Date Purchased"
          />
        </div>
      </div>
      <div>
        <Button type="submit" disabled={pristine || submitting}>Submit</Button>
      </div>
    </Form>
  )
}

export default reduxForm({
  form: 'Upload',
})(UploadForm);