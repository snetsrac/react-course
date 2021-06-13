import React from 'react';
import { Form, Field } from 'react-final-form';

import history from '../../history';

class StreamForm extends React.Component {
  render() {
    return (
      <Form onSubmit={this.props.onSubmit} validate={validate}>
        {({ handleSubmit, submitting, invalid, pristine }) => (
          <form className="ui form" onSubmit={handleSubmit}>
            {this.props.initialValues &&
              <Field name="userId" initialValue={this.props.initialValues.userId}>
                {({ input }) => (
                  <input {...input} type="hidden" />
                )}
              </Field>
            }
            <Field name="title" validate={required} initialValue={this.props.initialValues?.title || ''}>
              {({ input, meta }) => (
                <div className={`required field${error(meta)}`}>
                  <label>Title</label>
                  <input {...input} type="text" placeholder="Title" />
                </div>
              )}
            </Field>
            <Field name="description" validate={required} initialValue={this.props.initialValues?.description || ''}>
              {({ input, meta }) => (
                <div className={`required field${error(meta)}`}>
                  <label>Description</label>
                  <textarea {...input} placeholder="Description" rows="5" maxLength="256" />
                </div>
              )}
            </Field>
            <button
              className="ui right floated button"
              type="button"
              onClick={history.goBack}
            >
              Cancel
            </button>
            <button
              className="ui right floated positive button"
              type="submit"
              disabled={pristine || invalid || submitting}
            >
              Submit
            </button>
          </form>
        )}
      </Form>
    );
  }
}

export default StreamForm;

const validate = (values) => {
  return {
    title: required(values.title),
    description: required(values.description)
  };
}

const required = (value) => {
  return value ? undefined : 'Required';
};

const error = (meta) => {
  return meta.error && meta.touched ? ' error' : '';
};
