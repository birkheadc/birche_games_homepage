import { IGameProfile } from "./IGameProfile";

export default interface IGame {
  id: string,
  viewportRatio: number,
  profile: IGameProfile
}