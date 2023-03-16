import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import './reset.css';
import './fonts.css';
import './vars.css';

import './App.css'
import Main from './components/main/Main';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';

interface IAppProps {

}

function App(props: IAppProps): JSX.Element {

  return (
    <BrowserRouter>
      <Nav />
      <Main />
      <Footer />
    </BrowserRouter>
  );
}

export default App;