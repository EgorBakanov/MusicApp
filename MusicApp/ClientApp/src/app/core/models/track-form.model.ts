export class TrackForm {
  constructor(
    public id: number,
    public albumId: number,
    public name: string,
    public duration: string,
    public isFavorite: boolean,
    public isListened: boolean,
    public rating: number
  ) {}
}
