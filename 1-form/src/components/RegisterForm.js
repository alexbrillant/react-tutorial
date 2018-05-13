import React, { Component } from 'react';
import { Field, reduxForm, FieldArray } from 'redux-form';
import { customInput, customSelect, discounts } from './fields';
// import { validate } from '../validation/'
import {
    required, 
    minLength, 
    maxLength,
    asyncValidate
} from '../validation'

class RegisterForm extends Component {
  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Field
          name="name"
          component={customInput}
          type="text"
          label="Name"
          validate={[required, minLength, maxLength]}
        />
        <Field
          name="preference"
          component={customSelect}
          label="Preferred Formatting"
        />
        <Field
          name="newsletter"
          component={customInput}
          type="checkbox"
          label="Sign up to Newsletter?"
        />
        <FieldArray name="discountCodes" component={discounts} />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

RegisterForm = reduxForm({
  form: 'register',
  asyncValidate, 
  asyncBlurFields: ['username']
  // validate
})(RegisterForm);

export default RegisterForm;