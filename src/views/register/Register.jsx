import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

import { useFormik } from 'formik';
import axios from 'axios';

import { RegisterWrapper, FormWrapper, InputStyled, RegisterTitle, Button, AlertsContainer, AlertWidth } from './styled';

export const Register = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [alerMessage, setAlertMessage] = useState('');

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit: async values => {
      if (values.password !== values.confirmPassword) {
        setError(true);
        setAlertMessage('Not matching password, please try again');
      }
      await axios.post(`http://localhost:${process.env.REACT_APP_END_POINT_PORT}/api/auth/register`, { username: values.username, email: values.email, password: values.password }).then((res) => {
        setLoading(true);
        setTimeout(() => {
          setLoading(false);
          setSuccess(res.data.success);
          setAlertMessage(res.data.message);
          setDisabled(true);
        }, 3000);
        setTimeout(() => {
          navigate('/login');
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
      <RegisterWrapper>
        <RegisterTitle>Register</RegisterTitle>
        <FormWrapper onSubmit={formik.handleSubmit}>
          <InputStyled type='email' value={formik.values.email} placeholder='Email' name='email' onChange={formik.handleChange} disabled={disabled} />
          <InputStyled type='text' value={formik.values.username} placeholder='Username' name='username' onChange={formik.handleChange} disabled={disabled} />
          <InputStyled type='password' value={formik.values.password} placeholder='Password' name='password' onChange={formik.handleChange} disabled={disabled} />
          <InputStyled type='password' value={formik.values.confirmPassword} placeholder='Confirm Password' name='confirmPassword' onChange={formik.handleChange} disabled={disabled} />
          <Button type='submit' disabled={disabled}>
            {
              loading ?
                <div className="spinner-border text-light" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                : <span>Register</span>
            }
          </Button>
        </FormWrapper>
        <Link to='/login'>Login</Link>
      </RegisterWrapper>
      <AlertsContainer>
        {
          error ?
            <AlertWidth>
              <div className="alert alert-danger" role="alert">
                {alerMessage}
              </div>
            </AlertWidth>
            : ''
        }
        {
          success ?
            <AlertWidth>
              <div className="alert alert-success" role="alert">
                {alerMessage}
              </div>
            </AlertWidth>
            : ''
        }
      </AlertsContainer>
    </div>
  )
}