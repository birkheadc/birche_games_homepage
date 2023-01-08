import IGame from "../model/IGame";
import { INewGame } from "../model/INewGame";
import IGameValidity from "./gameValidity";

export default function getGameValidity(game: INewGame): IGameValidity {
  const title = game.title.length > 0;
  const description = game.description.length > 0;
  const viewportRatio = game.viewportRatio > 0;
  const dist = game.dist != null;
  const coverImage = game.coverImage != null;

  return {
    title: title,
    description: description,
    viewportRatio: viewportRatio,
    dist: dist,
    coverImage: coverImage,
    isValid: title && description && viewportRatio && dist && coverImage
  }
}