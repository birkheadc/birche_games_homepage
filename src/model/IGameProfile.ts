export interface IGameProfile {
  id: string,
  title: string,
  description: string,
  coverImage: {
    gameId: string,
    imageName: string
  }
}