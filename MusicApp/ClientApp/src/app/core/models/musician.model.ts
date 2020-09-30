import { Album } from "./album.model";

export class Musician {
  constructor(public id: number, public name: string, public albums: Album[]) {}
}
