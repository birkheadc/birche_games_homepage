import * as React from 'react';
import api from '../../api';
import IGame from '../../model/IGame';
import './GamePlayer.css';
import LoadingCurtain from './loadingCurtain/LoadingCurtain';

interface IGamePlayerProps {
  game: IGame
}
function GamePlayer(props: IGamePlayerProps): JSX.Element {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    
    function calculatePlayerSize(): { width: number, height: number } {
      const wrapperWidth = document.querySelector('#player-main-wrapper')?.clientWidth || 600;
      const width = wrapperWidth * 0.8;
      return {
        width: width,
        height: width / props.game.viewportRatio
      }
    }
    
    const playerSize = calculatePlayerSize();
    document.documentElement.style.setProperty('--player-width', playerSize.width.toString() + 'px');
    document.documentElement.style.setProperty('--player-height', playerSize.height.toString() + 'px');

    api.loadGame(props.game.id, () => {
      setLoading(false);
    });
  }, []);

  return (
    <div id='game-wrapper' className={loading ? 'hide' : ''}>
      <LoadingCurtain isVisible={loading} />
      <div id='game'></div>
    </div>
  );
}

export default GamePlayer;