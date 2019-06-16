import React from "react";
import { FormBox, IFormProps } from "./form-box";
import * as yup from "yup";
import {userActions} from '../actions/user-actions'
interface ILoginProps {}

export const Login: React.SFC<ILoginProps> = () => {
  const loginSchema = yup.object({
    email: yup.string().required(),
    password: yup.string().required()
  });
  const loginForm: IFormProps = {
    formSubmitLink: userActions.userLogin,
    formButtonText: "Login",
    schema: loginSchema,
    inputFormList: [
      {
        inputFormId: "formBasicEmail",
        inputValueName: "email",
        inputLabel: "Email address",
        inputType: "email",
        inputPlaceholder: "Enter email",
        inputErrorMessage: "Please provide valid email address",
        inputMessage: "We ll never share your email with anyone else."
      },
      {
        inputFormId: "formBasicPassword",
        inputValueName: "password",
        inputLabel: "Password",
        inputType: "password",
        inputPlaceholder: "Password",
        inputErrorMessage: "Please provide valid password"
      }
    ]
  };

  return <FormBox {...loginForm} />;
};
