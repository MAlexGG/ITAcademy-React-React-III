import React from 'react';
import Header from '../../header/Header';
import { BtForm, CtButtonsForm, CtSignup, CtSignupForm, InputSignup } from './Signup.styled';
import { useLocalStorage } from '../../localstorage/useLocalStorage';
import { useNavigate } from 'react-router-dom';

export default function Signup() {

  const [form, setForm] = useLocalStorage('form', []);

  let navigate = useNavigate();


  const handleChange = (e) => {
    e.persist();
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const handleSubmit = () => {
    navigate('/starships', { replace: true })
  };

  const handleReset = () => {
    localStorage.removeItem('form');
    navigate('/', { replace: true });
  };


  return (
    <>
      <CtSignup>
        <Header />
        <CtSignupForm onSubmit={handleSubmit}>
          <InputSignup type='text' placeholder='Name' name='name' required onChange={handleChange}/>
          <InputSignup type='mail' placeholder='Mail' name='mail' required onChange={handleChange}/>
          <InputSignup type='password' placeholder='Password' name='password' required onChange={handleChange}/>
          <CtButtonsForm>
            <BtForm type='submit'>Sign Up</BtForm>
            <BtForm type='reset' onClick={handleReset}>Cancel</BtForm>
          </CtButtonsForm>
        </CtSignupForm>
      </CtSignup>
    </>
  )
}