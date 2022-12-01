import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css'

interface INavProps {

}

function Nav(props: INavProps): JSX.Element {
  return (
    <nav>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/browse?platform=browser'>Browser Games</NavLink></li>
        <li><NavLink to='/browse?platform=desktop'>Desktop Games</NavLink></li>
      </ul>
    </nav>
  );
}

export default Nav;