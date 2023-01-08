import * as React from 'react';
import api from '../../../api';
import LoadingWidget from '../../loadingPage/LoadingWidget';
import './LoginForm.css'

interface ILoginFormProps {
  handleRegisterToken: (token: string) => void,
  handleWorking: (isWorking: boolean) => void
}

function LoginForm(props: ILoginFormProps): JSX.Element {

  const [message, setMessage] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    async function submit() {
      props.handleWorking(true);
      let token = await api.fetchSessionToken(password);
      if (token === '') {
        setMessage('Access Denied');
        setPassword('');
      }
      else {
        props.handleRegisterToken(token);
      }
      props.handleWorking(false);
    }
    event.preventDefault();
    submit();
  }

  function getMessage(): JSX.Element | null {
    if (message === '') return null;
    return (
      <span className='admin-form-message error'>{message}</span>
    );
  }

  return (
    <form className='admin-login-form admin-form' onSubmit={handleSubmit}>
      <h2>Login</h2>
      {getMessage()}
      <div className='admin-form-row-wrapper'>
        <label htmlFor='admin-login-password'>Admin Password</label>
        <input className='text-input' onChange={updatePassword} id='admin-login-password' name='password' type='password' value={password}></input>
      </div>
      <div className='submit-button-wrapper'>
        <button type='submit'>Submit</button>
      </div>
    </form>
  );
}

export default LoginForm;