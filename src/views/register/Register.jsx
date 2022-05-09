import React from 'react';

import { useFormik } from 'formik';

import { RegisterWrapper } from './styled';

export const Register = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: values => {
      console.log(values);
    }
  });

  return(
    <RegisterWrapper>
      <h2>Register</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Email:
          <input type='email' value={formik.values.email} placeholder='Email' name='email' onChange={formik.handleChange} />
        </label>
        <label>
          Username:
          <input type='text' value={formik.values.username} placeholder='Username' name='username' onChange={formik.handleChange} />
        </label>
        <label>
          Password:
          <input type='password' value={formik.values.password} placeholder='Password' name='password' onChange={formik.handleChange} />
        </label>
        <label>
          Confirm Password:
          <input type='password' value={formik.values.confirmPassword} placeholder='Confirm Password' name='confirmPassword' onChange={formik.handleChange} />
        </label>
        <button type='submit'>Confirm</button>
      </form>
    </RegisterWrapper>
  )
}