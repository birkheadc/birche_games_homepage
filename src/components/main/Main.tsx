import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { IGameProfile } from '../../model/IGameProfile';
import AdminPage from '../admin/adminPage/AdminPage';
import GameBrowser from '../gameBrowser/GameBrowser';
import About from './about/About';
import './Main.css'
import Play from './play/Play';
import Welcome from './welcome/Welcome';

interface IMainProps {
  
}

function Main(props: IMainProps): JSX.Element {
  return (
    <main>
      <Routes>
        <Route path='/play' element={<Play />} />
        <Route path ='/browse' element={<GameBrowser />} />
        <Route path ='/about' element={<About />} />
        <Route path ='/admin' element={<AdminPage />} />
        <Route path='/' element={<Welcome />} />
        <Route path='*' element={<Navigate replace={true} to={{pathname: '/'}} />} />
      </Routes>
    </main>
  );
}

export default Main;