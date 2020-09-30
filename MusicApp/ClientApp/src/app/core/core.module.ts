import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

export { MusiciansService } from "./services/musicians.service";
export { AlbumsService } from "./services/albums.service";
export { TracksService } from "./services/tracks.service";

export { Album } from "./models/album.model";
export { Musician } from "./models/musician.model";
export { Track } from "./models/track.model";
export { AlbumForm } from "./models/album-form.model";
export { MusicianForm } from "./models/musician-form.model";
export { TrackForm } from "./models/track-form.model";

@NgModule({
  imports: [HttpClientModule],
})
export class CoreModule {}
