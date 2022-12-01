import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './reset.css';
import './vars.css';

import './App.css'
import Background from './components/background/Background';
import Main from './components/main/Main';
import Nav from './components/nav/Nav';

interface IAppProps {

}

function App(props: IAppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Background />
      <Nav />
      <Main />
    </BrowserRouter>
  );
}

export default App;