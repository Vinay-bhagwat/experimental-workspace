import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik } from "formik";

export interface IFormState {
  validated: boolean;
}

export interface IForm {
  inputFormId: string;
  inputValueName?: string;
  inputLabel: string;
  inputType: string;
  inputPlaceholder?: string;
  inputMessage?: string;
  inputErrorMessage?: string;
}
export interface IFormProps {
  inputFormList: IForm[];
  formButtonText: string;
  formSubmitLink: any;
  schema: any;
}

export class FormBox extends React.PureComponent<IFormProps, IFormState> {
  public renderFormGroup = (handleChange: any, errors: any, values: any) => {
    return this.props.inputFormList.map(formItem => {
      return (
        <Form.Group controlId={formItem.inputFormId}>
          <Form.Label>{formItem.inputLabel}</Form.Label>
          <Form.Control
            type={formItem.inputType}
            placeholder={formItem.inputPlaceholder}
            name={formItem.inputValueName}
            onChange={handleChange}
            isInvalid={!!errors[`${formItem.inputValueName}`]}
            value={values[`${formItem.inputValueName}`]}
          />
          {formItem.inputMessage && (
            <Form.Text className="text-muted">
              {formItem.inputMessage}
            </Form.Text>
          )}
          {formItem.inputErrorMessage && (
            <Form.Control.Feedback type="invalid">
              {formItem.inputErrorMessage}
            </Form.Control.Feedback>
          )}
        </Form.Group>
      );
    });
  };
  public render() {
    return (
      <Formik
        validationSchema={this.props.schema}
        onSubmit={this.props.formSubmitLink}
        initialValues={{}}
      >
        {({ handleSubmit, handleChange, values, errors }) => (
          <Form noValidate onSubmit={handleSubmit}>
            {this.renderFormGroup(handleChange, errors, values)}
            <Button variant="primary" type="submit">
              {this.props.formButtonText}
            </Button>
          </Form>
        )}
      </Formik>
    );
  }
}
