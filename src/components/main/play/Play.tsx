import * as React from 'react';
import IGame from '../../../model/IGame';
import GamePlayer from '../../gamePlayer/GamePlayer';
import './Play.css'

interface IPlayProps {

}

function Play(props: IPlayProps): JSX.Element {

  const game: IGame = {
    url: '',
    type: '',
    aspectRatio: 1.3333
  }

  return (
    <div id='player-main-wrapper'>
      {/* TODO: Make title dynamic */}
      <h1>DEJAVU</h1>
      <GamePlayer game={game}/>
    </div>
  );
}

export default Play;