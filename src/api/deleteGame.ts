import { IApiResult } from ".";
import { env } from "../env/env";

export default async function deleteGame(id: string): Promise<IApiResult> {
  if (id === '') {
    return {
      message: 'Please select a game.',
      errorCode: 1
    };
  }
  const url = env.API_URL + '/api/games/' + id;
  const token: string = window.localStorage.getItem(env.SESSION_TOKEN) ?? '';
  if (token === '') {
    return {
      message: 'Session token not found.',
      errorCode: 1
    };
  }
  console.log("Attempting to delete game at url: ", url);
  try {
    let response: Response = await fetch(
      url, {
        method: 'DELETE',
        headers: {
          'Authorization': token
        }
      }
    );
    if (response.status !== 200) {
      return {
        message: 'Access denied.',
        errorCode: 1
      }
    };
    return {
      message: 'Successfully deleted game with id: ' + id,
      errorCode: 0
    }
  }
  catch {
    return {
      message: 'Could not connect to server.',
      errorCode: 1
    };
  }
}