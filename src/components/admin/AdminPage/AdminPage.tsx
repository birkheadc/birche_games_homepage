import * as React from 'react';
import api from '../../../api';
import UploadForm from '../uploadForm/UploadForm';
import './AdminPage.css'

interface IAdminPageProps {

}

function AdminPage(props: IAdminPageProps): JSX.Element {
  return (
    <div className='admin-page-wrapper'>
      <h1>ADMIN</h1>
      <UploadForm />
    </div>
  );
}

export default AdminPage;