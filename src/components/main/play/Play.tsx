import * as React from 'react';
import GamePlayer from '../../gamePlayer/GamePlayer';
import './Play.css'

interface IPlayProps {

}

function Play(props: IPlayProps): JSX.Element {
  return (
    <div>
      <h1>PLAY</h1>
      <GamePlayer />
    </div>
  );
}

export default Play;