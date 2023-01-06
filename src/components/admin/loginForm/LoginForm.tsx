import * as React from 'react';
import api from '../../../api';
import LoadingWidget from '../../loadingPage/LoadingWidget';
import './LoginForm.css'

interface ILoginFormProps {

}

function LoginForm(props: ILoginFormProps): JSX.Element {

  const [isWorking, setWorking] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  const updatePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
  }

  const handleSubmit = (event: React.FormEvent<HTMLElement>) => {
    async function submit() {
      setWorking(true);
      let token = await api.fetchSessionToken(password);
      console.log("Token: ", token);
      setWorking(false);
    }
    event.preventDefault();
    submit();
  }

  function getMessage(): JSX.Element | null {
    if (message === '') return null;
    return (
      <p className='admin-form-message'>{message}</p>
    );
  }

  function getContents(): JSX.Element {
    if (isWorking === true) {
      return (
        <LoadingWidget color={'var(--clr-bg-b)'} />
      );
    }
    return (
      <form onSubmit={handleSubmit}>
        <div className='admin-form-row-wrapper'>
          <label htmlFor='admin-login-password'>Admin Password</label>
          <input onChange={updatePassword} id='admin-login-password' name='password' type='password' value={password}></input>
        </div>
        <div className='login-form-submit-button-wrapper'>
          <button type='submit'>Submit</button>
        </div>
      </form>
    );
  }

  return (
    <div>
      <h2>Log In</h2>
      {getMessage()}
      {getContents()}
    </div>
  );
}

export default LoginForm;