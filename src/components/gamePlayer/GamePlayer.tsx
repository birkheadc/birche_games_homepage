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
      const defaultSize = {
        width: 600 * props.game.aspectRatio,
        height: 600
      }

      const wrapper = document.querySelector('#player-main-wrapper');
      if (wrapper == null) {
        return defaultSize;
      }

      const windowWidth = wrapper.clientWidth;
      const windowHeight = wrapper.clientHeight;

      console.log('width: ', windowWidth, 'height: ', windowHeight);

      if (windowWidth * props.game.aspectRatio > windowHeight) {
        return {
          width: windowHeight * props.game.aspectRatio,
          height: windowHeight
        }
      }
      else {
        return {
          width: windowWidth,
          height: windowWidth / props.game.aspectRatio
        }
      }
      
    }
    const playerSize = calculatePlayerSize();
    document.documentElement.style.setProperty('--player-width', playerSize.width.toString() + 'px');
    document.documentElement.style.setProperty('--player-height', playerSize.height.toString() + 'px');
    api.loadGameScript('dejavu', () => {
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