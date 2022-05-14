import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useFormik } from 'formik';
import axios from 'axios';

import { LoginWrapper, FormWrapper, InputStyled, Button, LoginTitle, AlertsContainer, AlertWidth } from './styled';

export const Login = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [alerMessage, setAlertMessage] = useState('');

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
      await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/auth/login`, { email: values.email, password: values.password }, config).then((res) => {
        localStorage.setItem('username', res.data.user.username);
        localStorage.setItem('email', res.data.user.email);
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSuccess(res.data.success);
          setAlertMessage(res.data.message);
          setDisabled(true);
        }, 3000);
        setTimeout(() => {
          navigate('/');
        }, 5000);
      }).catch((error) => {
        setError(error.response.data.error);
        setAlertMessage(error.response.data.message);
        setTimeout(() => {
          setError(false);
        }, 3000);
      })
    }
  });


  return (
    <div>
      <LoginWrapper>
        <LoginTitle>Log In</LoginTitle>
        <FormWrapper onSubmit={formik.handleSubmit}>
          <InputStyled type='email' value={formik.values.email} placeholder='Email' name='email' onChange={formik.handleChange} disabled={disabled} />
          <InputStyled type='password' value={formik.values.password} placeholder='Password' name='password' onChange={formik.handleChange} disabled={disabled} />
          <Button type='submit' disabled={disabled} >
            {
              loading ?
                <div class="spinner-border text-light" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
                : <span>LOGIN</span>
            }
          </Button>
        </FormWrapper>
        <Link to='/register'>Register</Link>
      </LoginWrapper>
      <AlertsContainer>
        {
          error ?
            <AlertWidth>
              <div class="alert alert-danger" role="alert">
                {alerMessage}
              </div>
            </AlertWidth>
            : ''
        }
        {
          success ?
            <AlertWidth>
              <div class="alert alert-success" role="alert">
                {alerMessage}
              </div>
            </AlertWidth>
            : ''
        }
      </AlertsContainer>
    </div>
  )
}