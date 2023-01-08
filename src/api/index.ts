import fetchGameProfiles from "./fetchGameProfiles";
import loadGame from "./loadGame";
import uploadGame from "./uploadGame";
import fetchGame from "./fetchGame";
import uploadFile from "./uploadFile";
import fetchSessionToken from "./fetchSessionToken";
import validateSessionToken from "./validateSessionToken";
import deleteGame from "./deleteGame";
import getGameValidity from "./getGameValidity";

export interface IApiResult {
  message: string,
  errorCode: number
}

export default {
  fetchGameProfiles,
  loadGame,
  uploadGame,
  fetchGame,
  uploadFile,
  fetchSessionToken,
  validateSessionToken,
  deleteGame,
  getGameValidity
}