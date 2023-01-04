import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api';
import { env } from '../../../env/env';
import { IGameProfile } from '../../../model/IGameProfile';
import './GameBrowserCard.css';

interface IGameBrowserCardProps {
  game: IGameProfile
}
function GameBrowserCard(props: IGameBrowserCardProps): JSX.Element {  

  const nav = useNavigate();

  const openPlayer = () => {
    nav('/play?id=' + props.game.id);
  }

  return (
    <div className='game-browser-card-wrapper'>
      <div className='game-browser-card-wrapper-inner' onClick={openPlayer}>
        <h2>{props.game.title}</h2>
        <img src={env.API_URL + '/static/covers/' + props.game.id + '.png'}></img>
        <p className='game-browser-description'>{props.game.description}</p>
      </div>
    </div>
  );
}

export default GameBrowserCard;