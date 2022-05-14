import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useFormik } from 'formik';
import axios from 'axios';

import { LoginWrapper, FormWrapper, InputStyled, Button, LoginTitle } from './styled';

export const Login = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: async values => {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      // await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/auth/login`, { email: values.email, password: values.password }).then((res) => {
      //   localStorage.setItem('username', res.data.user.username);
      //   localStorage.setItem('email', res.data.user.email);
      //   navigate('/');
      //   console.log(res)
      // }).catch((error) => {
      //   console.log(error);
      // })
      try {
        const { data } = await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/auth/login`, { email: values.email, password: values.password }, config)
        localStorage.setItem('username', data.user.username);
        localStorage.setItem('email', data.user.email);
        navigate('/');
        console.log(data)
      } catch (error) {
        console.log(error);
      }
    }
  });


  return (
    <LoginWrapper>
      <LoginTitle>Log In</LoginTitle>
      <FormWrapper onSubmit={formik.handleSubmit}>
        <InputStyled type='email' value={formik.values.email} placeholder='Email' name='email' onChange={formik.handleChange} />
        <InputStyled type='password' value={formik.values.password} placeholder='Password' name='password' onChange={formik.handleChange} />
        <Button type='submit'>LOGIN</Button>
      </FormWrapper>
      <Link to='/register'>Register</Link>
    </LoginWrapper>
  )
}