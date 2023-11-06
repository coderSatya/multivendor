import * as yup from "yup";
export const Schema = yup.object().shape({
    firstName: yup.string().trim()
      .required(),
    LastName: yup.string().trim()
      .required(),
     
      emailAddress: yup.string().trim().required(),
    password: yup.string()
      .required(),
      confirmPassword: yup.string()
      .required()
     
  });