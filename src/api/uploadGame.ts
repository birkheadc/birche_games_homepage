import { METHODS } from "http";
import { env } from "../env/env";
import { INewGame } from "../model/INewGame";

export default async function uploadGame(game: INewGame) {
  const url = env.API_URL + '/api/games';
  console.log("Attempting to upload game at url: " + url);
  let formData = new FormData();
  Object.keys(game).forEach(function (key) {
    formData.append(key, game[key as keyof typeof game]);
  })
  console.log('Form Data: ', formData);
  try {
    let response: void | Response = await fetch(
      url,
      {
        method: 'POST',
        body: formData
      }
    )
    if (response.status !== 200) {
      console.log("Failed to upload game, error code: ", response.status);
      return;
    }
    response.json().then(data => console.log(data));
    // .then(
    //   response =>
    //   {
    //     if (response.status !== 200) {
    //       console.log("Failed to upload game, error code: ", response.status);
    //       return;
    //     }
    //     response.json();
    //   }
    // )
    // .then(
    //   data =>
    //   {
    //     console.log("Game uploaded successfully.", data);
    //   }
    // );
  }
  catch {
    console.log("Failed to upload game, could not connect to server.");
  }
}