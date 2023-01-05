import * as React from 'react';
import LoginForm from '../loginForm/LoginForm';
import UploadForm from '../uploadForm/UploadForm';
import './AdminPage.css'

interface IAdminPageProps {

}

function AdminPage(props: IAdminPageProps): JSX.Element {

  const [isLoggedIn, setLoggedIn] = React.useState<boolean>();

  function getContents(): JSX.Element {
    if (isLoggedIn === true) {
      return (
        <UploadForm />
      );
    }
    return (
      <LoginForm />
    );
  }

  return (
    <div className='admin-page-wrapper'>
      <h1>ADMIN</h1>
      <UploadForm />
    </div>
  );
}

export default AdminPage;