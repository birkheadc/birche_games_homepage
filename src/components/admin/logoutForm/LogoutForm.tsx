import * as React from 'react';
import './LogoutForm.css'

interface ILogoutFormProps {
  handleLogout: () => void
}

function LogoutForm(props: ILogoutFormProps): JSX.Element {

  const handleLogout = (event: React.FormEvent<HTMLElement>): void => {
    event.preventDefault();
    props.handleLogout();
  }

  return (
    <form className='admin-logout-form' onSubmit={handleLogout}>
      <button type='submit'>Logout</button>
    </form>
  );
}

export default LogoutForm;