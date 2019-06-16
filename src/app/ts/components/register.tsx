import React from "react";
import * as yup from 'yup';
import { FormBox, IFormProps } from "./form-box";
import {  postRegisterInfo } from '../services/utils.helper';

interface IRegisterProps {}

export const Register: React.SFC<IRegisterProps> = () => {
    const registerSchema =yup.object({
        firstName: yup.string().required(),
        lastName: yup.string().required(),
        email: yup.string().required(),
        password: yup.string().required(),
      });
  const registerForm: IFormProps = {
      schema:registerSchema,
      formSubmitLink:postRegisterInfo,
    formButtonText: "Register",
    inputFormList: [
      {
        inputFormId: "formBasicName",
        inputLabel: "First Name",
        inputType: "",
        inputValueName:'firstName',
        inputPlaceholder: "Enter first name",
        inputErrorMessage: "Please provide first name",
      },
      {
        inputFormId: "formBasicLastName",
        inputLabel: "Last Name",
        inputType: "",
        inputValueName:'lastName',
        inputPlaceholder: "Enter last name",
        inputErrorMessage: "Please provide valid last name",
      },

      {
        inputFormId: "formBasicEmail",
        inputLabel: "Email address",
        inputType: "email",
        inputValueName:'email',
        inputPlaceholder: "Enter email",
        inputErrorMessage: "Please provide valid email address",
        inputMessage: "We ll never share your email with anyone else.",
      },
      {
        inputFormId: "formBasicPassword",
        inputValueName:'password',
        inputLabel: "Password",
        inputType: "password",
        inputPlaceholder: "Password",
        inputErrorMessage: "Please provide valid password",
      },
    //   {
    //     inputFormId: "formBasicConfirmPassword",
    //     inputLabel: "Confirm Password",
    //     inputType: "password",
    //     inputPlaceholder: "Password",
    //     isRequired: true
    //   }
    ]
  };

  return <FormBox {...registerForm} />;
};

