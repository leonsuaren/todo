import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useFormik } from 'formik';
import axios from 'axios';

import { RegisterWrapper, FormWrapper, InputStyled, RegisterTitle, Button } from './styled';

export const Register = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async values => {
      await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/auth/register`, { username: values.username, email: values.email, password: values.password }).then((res) => {
        setLoading(true);
        setTimeout(() => {
          navigate('/login');
        }, 3000);
      }).catch((error) => {
        console.log(error);
      })
    }
  });

  return (
    <RegisterWrapper>
      <RegisterTitle>Register</RegisterTitle>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <InputStyled type='email' value={formik.values.email} placeholder='Email' name='email' onChange={formik.handleChange} />
        <InputStyled type='text' value={formik.values.username} placeholder='Username' name='username' onChange={formik.handleChange} />
        <InputStyled type='password' value={formik.values.password} placeholder='Password' name='password' onChange={formik.handleChange} />
        <InputStyled type='password' value={formik.values.confirmPassword} placeholder='Confirm Password' name='confirmPassword' onChange={formik.handleChange} />
        <Button type='submit'>
          {
            loading ?
              <div class="spinner-border text-light" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              : <span>Register</span>
          }
        </Button>
      </FormWrapper>
      <Link to='/login'>Login</Link>
    </RegisterWrapper>
  )
}