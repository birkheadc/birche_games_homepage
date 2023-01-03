import * as React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { IGameProfile } from '../../api/fetchGameProfiles';
import AdminPage from '../admin/AdminPage/AdminPage';
import GameBrowser from '../gameBrowser/GameBrowser';
import About from './about/About';
import './Main.css'
import Play from './play/Play';
import Welcome from './welcome/Welcome';

interface IMainProps {
  games: IGameProfile[]
}

function Main(props: IMainProps): JSX.Element {
  return (
    <main>
      <Routes>
        <Route path='/play' element={<Play />} />
        <Route path ='/browse' element={<GameBrowser games={props.games}/>} />
        <Route path ='/about' element={<About />} />
        <Route path ='/admin' element={<AdminPage />} />
        <Route path='/' element={<Welcome />} />
        <Route path='*' element={<Navigate replace={true} to={{pathname: '/'}} />} />
      </Routes>
    </main>
  );
}

export default Main;