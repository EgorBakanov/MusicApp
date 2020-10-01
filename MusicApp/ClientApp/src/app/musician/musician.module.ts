import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CoreModule, MusiciansService } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";

import { MusicianPageComponent } from "./musician-page/musician-page.component";
export { MusicianPageComponent } from "./musician-page/musician-page.component";
import { MusicianAddPageComponent } from "./musician-add-page/musician-add-page.component";
export { MusicianAddPageComponent } from "./musician-add-page/musician-add-page.component";
import { MusicianEditPageComponent } from "./musician-edit-page/musician-edit-page.component";
export { MusicianEditPageComponent } from "./musician-edit-page/musician-edit-page.component";
import { MusicianDeletePageComponent } from "./musician-delete-page/musician-delete-page.component";
export { MusicianDeletePageComponent } from "./musician-delete-page/musician-delete-page.component";

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, RouterModule],
  declarations: [
    MusicianPageComponent,
    MusicianAddPageComponent,
    MusicianEditPageComponent,
    MusicianDeletePageComponent,
  ],
  exports: [
    MusicianPageComponent,
    MusicianAddPageComponent,
    MusicianEditPageComponent,
    MusicianDeletePageComponent,
  ],
  providers: [MusiciansService],
})
export class MusicianModule {}
