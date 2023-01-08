import * as React from 'react';
import api from '../../../api';
import { env } from '../../../env/env';
import LoadingCurtain from '../../gamePlayer/loadingCurtain/LoadingCurtain';
import LoadingPage from '../../loadingPage/LoadingPage';
import LoadingWidget from '../../loadingPage/LoadingWidget';
import DeleteGameForm from '../deleteGameForm/DeleteGameForm';
import LoginForm from '../loginForm/LoginForm';
import LogoutForm from '../logoutForm/LogoutForm';
import UploadForm from '../uploadForm/UploadForm';
import './AdminPage.css'

interface IAdminPageProps {

}

function AdminPage(props: IAdminPageProps): JSX.Element {

  const [isLoggedIn, setLoggedIn] = React.useState<boolean>(false);
  const [isWorking, setWorking] = React.useState<boolean>(true);

  const logout = (): void => {
    removeToken();
    setLoggedIn(false);
  }

  const registerToken = async (token: string): Promise<void> => {
    if (await isTokenValid(token) === true) {
      window.localStorage.setItem(env.SESSION_TOKEN, token);
      setLoggedIn(true);
    }
  }

  function removeToken(): void {
    window.localStorage.removeItem(env.SESSION_TOKEN);
  }

  function checkForToken(): string | null {
    return window.localStorage.getItem(env.SESSION_TOKEN);
  }

  async function isTokenValid(token: string): Promise<boolean> {
    const isValid = await api.validateSessionToken(token);
    return isValid;
  }

  React.useEffect(() => {
    async function checkLoginStatus() {
      const token: string | null = checkForToken();
      if (token == null) {
        setLoggedIn(false);
        setWorking(false);
        return;
      }
      if (await isTokenValid(token) === false) {
        removeToken();
        setLoggedIn(false);
        setWorking(false);
        return;
      }
      setLoggedIn(true);
      setWorking(false);
    }
    checkLoginStatus();
  }, []);

  function getContents(): JSX.Element {
    if (isLoggedIn === true) {
      return (
        <>
        {/* Todo: build forms wrapper component that can collapse it's contents */}
          <div className='admin-page-forms-wrapper'>
            <UploadForm handleWorking={(isWorking: boolean) => setWorking(isWorking)}/>
            <DeleteGameForm handleWorking={(isWorking: boolean) => setWorking(isWorking)}/>
          </div>
        <LogoutForm handleLogout={logout}/>
        </>
      );
    }
    return (
      <LoginForm handleRegisterToken={registerToken} handleWorking={(isWorking: boolean) => setWorking(isWorking)}/>
    );
  }

  return (
    <div className='admin-page-wrapper'>
      <div className='admin-page-inner-wrapper'>
        <div className='admin-page-contents'style={{opacity: isWorking ? 0 : 1}} >
          <h1>ADMIN</h1>
          {getContents()}
        </div>
        <div className='admin-page-working-curtain' style={{opacity: isWorking ? 1 : 0}}>
          <LoadingWidget color={'var(--clr-bg-b)'} />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;