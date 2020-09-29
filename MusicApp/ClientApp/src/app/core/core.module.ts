import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

export { MusiciansService } from "./services/musicians.service";

export { Album } from "./models/album.model";
export { Musician } from "./models/musician.model";

@NgModule({
  imports: [HttpClientModule],
})
export class CoreModule {}
