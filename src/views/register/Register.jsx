import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import axios from 'axios';

import { RegisterWrapper } from './styled';

export const Register = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async values => {
      await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/auth/register`, { username: values.username, email: values.email, password: values.password }).then((res) => {
        navigate('/login')
      }).catch((error) => {
        console.log(error);
      })
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