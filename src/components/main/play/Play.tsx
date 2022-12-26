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
    aspectRatio: 1.5
  }

  return (
    <div id='player-main-wrapper'>
      {/* TODO: Make title dynamic */}
      <h1>DEJAVU</h1>
      <GamePlayer game={game}/>
      <p className='player-description'>Dejavu was created in 1 month for Game Devcember 2022. It is the first game I have published.
        Some sections turned out much more difficult than I intended, and the story evolved into something much darker than I anticipated.
        All the same, it was fun to create, and I hope you had fun playing it is well.
        Thank you for playing.
      </p>
    </div>
  );
}

export default Play;