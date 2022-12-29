import * as React from 'react';
import { IGameProfile } from '../../api/fetchGameProfiles';
import './GameBrowser.css'
import GameBrowserCard from './gameBrowserCard/GameBrowserCard';

interface IGameBrowserProps {
  games: IGameProfile[]
}

function GameBrowser(props: IGameBrowserProps): JSX.Element {
  return (
    <div className='game-browser-page-wrapper'>
      <h1>Browse</h1>
      <div className='game-browser-cards-wrapper'>
      {props.games.map(
        game =>
        <GameBrowserCard key={game.id} game={game} />
      )}
      </div>
    </div>
  );
}

export default GameBrowser;