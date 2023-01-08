import * as React from 'react';
import api from '../../api';
import { IGameProfile } from '../../model/IGameProfile';
import LoadingPage from '../loadingPage/LoadingPage';
import LoadingWidget from '../loadingPage/LoadingWidget';
import './GameBrowser.css'
import GameBrowserCard from './gameBrowserCard/GameBrowserCard';

interface IGameBrowserProps {

}

function GameBrowser(props: IGameBrowserProps): JSX.Element {

  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [games, setGames] = React.useState<IGameProfile[]>([]);

  React.useEffect(() => {
    async function loadGames(): Promise<void> {
      const games = await api.fetchGameProfiles();
      setGames(games);
      setLoading(false);
    }
    loadGames();
  }, []);

  if (isLoading === true) {
    return (
      <LoadingWidget color={'var(--clr-bg-b)'} />
    );
  }
  return (
    <div className='game-browser-page-wrapper'>
      <h1>Browse</h1>
        <div className='game-browser-cards-wrapper'>
        {games.map(
          game =>
          <GameBrowserCard key={game.id} game={game} />
        )}
        </div>
    </div>
  );
}

export default GameBrowser;