import { env } from "../env/env";
import IGame from "../model/IGame";

export default async function fetchGame(id: string): Promise<IGame | null> {
  const url = env.API_URL + '/api/games/' + id;
  console.log("Attempting to fetch game at url: ", url);
  try {
    let response: Response = await fetch(
      url,
      { method: 'GET' }
    );
    if (response.status != 200) {
      console.log('Failed to fetch game. Received code: ', response.status);
      return null;
    }
    try {
      let data: IGame = await response.json();
      return data;
    }
    catch {
      console.log('Failed to fetch game. Received unexpected format.');
      return null;
    }
  }
  catch {
    console.log('Failed to fetch game. Could not connect to server.');
    return null;
  }
}