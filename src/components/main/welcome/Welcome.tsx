import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Welcome.css'

interface IWelcomeProps {

}

function Welcome(props: IWelcomeProps): JSX.Element {
  return (
    <div className='welcome-page-wrapper'>
      <h1>Welcome to Birche Games</h1>
      <p>This site is where I host the games I've created. Why not <NavLink to='/browse'>start browsing</NavLink> now?</p>
    </div>
  );
}

export default Welcome;