export class Track {
  constructor(
    public id: number,
    public name: string,
    public isFavorite: boolean,
    public isListened: boolean,
    public rating: number
  ) {}
}
