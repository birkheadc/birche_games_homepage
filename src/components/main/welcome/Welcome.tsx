import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Welcome.css'

interface IWelcomeProps {

}

function Welcome(props: IWelcomeProps): JSX.Element {
  return (
    <div>
      <h1>Welcome</h1>
      <p>This site is still under construction.</p>
      <p>At the moment my focus is on completing my first game jam. This site was thrown together quickly to host that game, which you can find <NavLink to='/play'>here</NavLink></p>
      <p>After the jam, I will finish building out this site, which I will continue to use to host my games.</p>
    </div>
  );
}

export default Welcome;