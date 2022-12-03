import * as React from 'react';
import api from '../../api';
import './GamePlayer.css';
import LoadingCurtain from './loadingCurtain/LoadingCurtain';

interface IGamePlayerProps {

}
function GamePlayer(props: IGamePlayerProps): JSX.Element {

  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    api.fetchGameScript('dejavu', () => {
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