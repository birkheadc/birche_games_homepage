import { METHODS } from "http";
import api, { IApiResult } from ".";
import { env } from "../env/env";
import { INewGame } from "../model/INewGame";

function isGameValid(game: INewGame): boolean {
  const validity = api.getGameValidity(game);
  return validity.isValid;
}

export default async function uploadGame(game: INewGame): Promise<IApiResult> {
  const url = env.API_URL + '/api/games';
  console.log("Attempting to upload game at url: " + url);
  if (isGameValid(game) === false) {
    return {
      message: "Game is not valid.",
      errorCode: 1
    };
  }
  const token: string = window.localStorage.getItem(env.SESSION_TOKEN) ?? '';
  let formData = new FormData();
  formData.append('title', game.title);
  formData.append('description', game.description);
  formData.append('viewportRatio', game.viewportRatio.toString());
  formData.append('dist', game.dist!);
  formData.append('coverImage', game.coverImage!);
  try {
    let response: Response = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Authorization': token
        },
        body: formData,
      }
    )
    if (response.status !== 200) {
      return {
      message: "Failed to upload game.",
      errorCode: 1
    };
    }
    return {
      message: "Game uploaded successfully!",
      errorCode: 0
    };
  }
  catch {
    return {
      message: "Could not connect to server.",
      errorCode: 1
    };
  }
}