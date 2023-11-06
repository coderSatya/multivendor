import React, { SyntheticEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import CustomCheckbox from "../../components/CustomCheckbox/CustomCheckbox";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "yup";
import { useMutation } from "react-query";
import axios from "axios";




const SignUp = () => {
  const [checked, setChecked] = useState(false);

  interface SignUpData {
    firstName:string,
    lastName:string,
    emailAddress:string,
    mobileNumber:string,
    password:string,
    confirmPassword:string
  }
  const addUsers = (user :SignUpData)=>{
    axios.post('http://localhost:3000/api/hello', user)
}
  const form = useForm<SignUpData>();
  const { register, formState, handleSubmit } = form;
  const { errors } = formState;


 

  const handleChange = (
    event: SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    setChecked(checked);
  };
   const {mutate} = useMutation(addUsers)
  const onSubmit = (data:SignUpData | any)=>{
   mutate(data, {
onSuccess:(data)=>{
alert(data)
}
   })
  }
  return (
    <div className="text-center ">
      <h1 className="text-center">Sign Up</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="my-5">
          <TextField
            className="mx-5"
            label="First Name"
            {...register("firstName")}
            error={!!errors?.firstName}
            helperText={errors?.firstName?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
          <TextField
            label="Last Name"
            {...register("lastName")}
              error={!!errors?.lastName}
              helperText={errors?.lastName?.message}
            variant="outlined"
            sx={{ width: 250 }}
            size="small"
          />
        </div>
        <div className="my-5">
          <TextField
            className=""
            label="Email Address"
            {...register("emailAddress")}
              error={!!errors?.emailAddress}
              helperText={errors?.emailAddress?.message}
            variant="outlined"
            sx={{ width: 500 }}
            size="small"
          />
        </div>
        <div className="my-5">
          <TextField
            className=""
            type="number"
            label="Mobile Number"
            {...register("mobileNumber")}
              error={!!errors?.mobileNumber}
              helperText={errors?.mobileNumber?.message}
            variant="outlined"
            sx={{ width: 500 }}
            size="small"
          />
        </div>
        <div className="my-5">
          <TextField
            className=""
            type="password"
            label="Password"
            {...register("password")}
              error={!!errors?.password}
              helperText={errors?.password?.message}
            variant="outlined"
            sx={{ width: 500 }}
            size="small"
          />
        </div>
        <div className="my-5">
          <TextField
            className=""
            type="password"
            label="Confirm Password"
            {...register("confirmPassword")}
              error={!!errors?.confirmPassword}
              helperText={errors?.confirmPassword?.message}
            variant="outlined"
            sx={{ width: 500 }}
            size="small"
          />
        </div>
        <CustomCheckbox
          label="Users will be required to accept the terms and conditions of the application to get register in the application."
          handleChange={handleChange}
          checked={checked}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          SIGN UP
        </button>
      </form>
    </div>
  );
};

export default SignUp;
