import * as React from 'react';
import './About.css'

interface IAboutProps {

}

function About(props: IAboutProps): JSX.Element {
  return (
    <div className='about-page-wrapper'>
      <h1>About Birche Games</h1>
      <div className='about-page-content-wrapper'>
        <p>
          My name is Colby Birkhead. I am the author of this site and all the games on it.
          Birche comes from my real name -- Bir from <strong>Bir</strong>khead, and Che from Colby (<strong>Che</strong>ese).
          It's also convenient that the Birk in <strong>Birk</strong>head means <strong>Birch</strong>, as in the tree.
        </p>
        <p>
          So, Birche.
        </p>
      </div>
    </div>
  );
}

export default About;