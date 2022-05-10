import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useFormik } from 'formik';
import axios from 'axios';

import { LoginWrapper } from './styled';

export const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    }, 
    onSubmit: async values => {
      await axios.post('http://localhost:3000/api/auth/login', { email: values.email, password: values.password }).then((res) => {
        localStorage.setItem('username', res.data.user.username);
        navigate('/');
      }).catch((error) => {
        console.log(error);
      })
    }
  });


  return (
    <LoginWrapper>
      <h2>Log In</h2>
      <form onSubmit={formik.handleSubmit}>
        <label>
          Email:
        <input type='email' value={formik.values.email} placeholder='Email' name='email' onChange={formik.handleChange} />
        </label>
        <label>
          Password:
        <input type='password' value={formik.values.password} placeholder='Password' name='password' onChange={formik.handleChange} />
        </label>
        <button type='submit'>Confirm</button>
      </form>
    </LoginWrapper>
  )
}