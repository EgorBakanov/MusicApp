import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CoreModule, TracksService } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";

import { TrackAddPageComponent } from "./track-add-page/track-add-page.component";
export { TrackAddPageComponent } from "./track-add-page/track-add-page.component";
import { TrackEditPageComponent } from "./track-edit-page/track-edit-page.component";
export { TrackEditPageComponent } from "./track-edit-page/track-edit-page.component";
import { TrackDeletePageComponent } from "./track-delete-page/track-delete-page.component";
export { TrackDeletePageComponent } from "./track-delete-page/track-delete-page.component";

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, RouterModule],
  declarations: [
    TrackAddPageComponent,
    TrackEditPageComponent,
    TrackDeletePageComponent,
  ],
  exports: [
    TrackAddPageComponent,
    TrackEditPageComponent,
    TrackDeletePageComponent,
  ],
  providers: [TracksService],
})
export class TrackModule {}
