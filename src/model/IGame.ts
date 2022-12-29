import { IGameProfile } from "./IGameProfile";

export default interface IGame {
  id: string,
  viewportRatio: number,
  distName: string,
  profile: IGameProfile
}