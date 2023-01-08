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

  function getTitleFontSize(title: string): string {
    let size: number = 14 / title.length;
    size = Math.min(size, 2);
    size = Math.max(0.8, size);
    return size + 'em';
  }

  return (
    <div className='game-browser-card-wrapper'>
      <div className='game-browser-card-wrapper-inner' onClick={openPlayer}>
        <div className='game-browser-card-title-wrapper'>
          <h2 style={{fontSize: getTitleFontSize(props.game.title)}}>{props.game.title}</h2>
        </div>
        <img src={env.API_URL + '/static/covers/' + props.game.id + '.png'}></img>
        <p className='game-browser-description'>{props.game.description}</p>
      </div>
    </div>
  );
}

export default GameBrowserCard;