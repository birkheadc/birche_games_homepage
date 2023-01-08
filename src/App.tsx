import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './reset.css';
import './fonts.css';
import './vars.css';

import './App.css'
import Background from './components/background/Background';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import LoadingPage from './components/loadingPage/LoadingPage';
import api from './api';
import { IGameProfile } from './api/fetchGameProfiles';
import Footer from './components/footer/Footer';

interface IAppProps {

}

function App(props: IAppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Background />
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;