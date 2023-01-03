import { METHODS } from "http";
import { env } from "../env/env";
import { INewGame } from "../model/INewGame";

export default async function uploadGame(game: INewGame) {
  const url = env.API_URL + '/api/games';
  console.log("Attempting to upload game at url: " + url);
  try {
    let response: void | Response = await fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(game)
      }
    )
    .then(response => response.json())
    .then(data => console.log(data));
    if (response?.status !== 200) {
      console.log("Failed to post game.");
    }
    console.log("Game uploaded successfully: ");
  }
  catch {
    console.log("Failed to upload game, could not connect to server.");
  }
}