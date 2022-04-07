import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../header/Header';
import { useLocalStorage } from '../../localstorage/useLocalStorage';
import { CtButtonsForm, CtLogin, CtLoginForm, InputLogin, BtForm } from './Login.styled';

export default function Login() {

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
      <CtLogin>
        <Header />
        <CtLoginForm onSubmit={handleSubmit}>
          <InputLogin type='text' placeholder='Mail' name='mail' required onChange={handleChange}/>
          <InputLogin type='password' placeholder='Password' name='password' required onChange={handleChange} />
          <CtButtonsForm>
            <BtForm type='submit'>Log in</BtForm>
            <BtForm type='reset' onClick={handleReset}>Cancel</BtForm>
          </CtButtonsForm>
          </CtLoginForm>
      </CtLogin>
    </>
  )
}