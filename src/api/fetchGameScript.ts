export default async function fetchGameScriptURL(gameName: string): Promise<string> {
  // TODO: Before building, comment the first return out.
  // TODO: Use the game name to fetch the url from an API that serves game data.
  // TODO: Right now I need to focus on just making the game for the game jam, I'll build the api after the jam ends.
  return 'http://localhost:3001/dejavu-game.js';
  return 'https://birchegames.com/games/dejavu/dejavu-game.js';
}