import * as React from 'react';
import { useLocation } from 'react-router-dom';
import fetchGame from '../../../api/fetchGame';
import IGame from '../../../model/IGame';
import GamePlayer from '../../gamePlayer/GamePlayer';
import LoadingCurtain from '../../gamePlayer/loadingCurtain/LoadingCurtain';
import './Play.css'

interface IPlayProps {

}

function Play(props: IPlayProps): JSX.Element {

  const [game, setGame] = React.useState<IGame | null>(null);

  const location = useLocation();

  React.useEffect(() => {
    async function getGame() {
      const id = new URLSearchParams(location.search).get('id');
      if (id == null) return;
      let game = await fetchGame(id);
      if (game == null) return;
      setGame(game);
    }
    getGame();
  }, [])

  function getContent(): JSX.Element {
    if (game == null) {
      return (
        <div className='loading-circle-dark'>
      
        </div>
      );
    }
    return (
      <>
        <h1>{game.profile.title}</h1>
        <GamePlayer game={game}/>
        <p className='player-description'>{game.profile.description}</p>
      </>
    );
  }

  

  return (
    <div id='player-main-wrapper'>
      {getContent()}
    </div>
  );
}

export default Play;