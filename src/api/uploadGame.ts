import { METHODS } from "http";
import { env } from "../env/env";
import { INewGame } from "../model/INewGame";

function isGameValid(game: INewGame): boolean {
  if (game.title.length < 1) {
    console.log("Title too short.");
    return false;
  }
  if (game.description.length < 1) {
    console.log("Description too short.");
    return false;
  }
  if (game.viewportRatio <= 0.0) {
    console.log("Ratio too low.");
    return false;
  }
  if (game.dist == null) {
    console.log("Dist is null");
    return false;
  }
  if (game.coverImage == null) {
    console.log("Cover image is null.")
    return false;
  }
  return true;
}

export default async function uploadGame(game: INewGame) {
  const url = env.API_URL + '/api/games';
  console.log("Attempting to upload game at url: " + url);
  if (isGameValid(game) === false) {
    console.log("Game is not valid. Aborting.");
    return;
  }
  let formData = new FormData();
  formData.append('title', game.title);
  formData.append('description', game.description);
  formData.append('viewportRatio', game.viewportRatio.toString());
  formData.append('dist', game.dist!);
  formData.append('coverImage', game.coverImage!);
  
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