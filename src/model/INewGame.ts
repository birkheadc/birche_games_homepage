import { IGameProfile } from "./IGameProfile";

export interface INewGame {
  title: string,
  description: string,
  viewportRatio: number,
  dist: File | null,
  coverImage: File | null
}