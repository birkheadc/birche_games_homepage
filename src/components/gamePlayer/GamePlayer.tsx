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
  const [dimensions, setDimensions] = React.useState({width: 0, height: 0});

  React.useEffect(() => {
    function handleResize() {
      if (document.fullscreenElement != null) {
        setDimensions({
          width: document.fullscreenElement.clientWidth,
          height: document.fullscreenElement.clientHeight
        });
      } else {
        const wrapperWidth = document.querySelector('#player-main-wrapper')?.clientWidth || 600;
        const width = wrapperWidth * 0.8;
        setDimensions({
          width: width,
          height: width / props.game.viewportRatio
        });
      }
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  });

  React.useEffect(() => {
    document.documentElement.style.setProperty('--player-width', dimensions.width.toString() + 'px');
    document.documentElement.style.setProperty('--player-height', dimensions.height.toString() + 'px');
  }, [dimensions])

  React.useEffect(() => {
  const wrapperWidth = document.querySelector('#player-main-wrapper')?.clientWidth || 600;
    const width = wrapperWidth * 0.8;
    setDimensions({
      width: width,
      height: width / props.game.viewportRatio
    });
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