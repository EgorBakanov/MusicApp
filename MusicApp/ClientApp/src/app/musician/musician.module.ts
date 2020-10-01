import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";

import { CoreModule, MusiciansService } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";

import { MusicianFormComponent } from "./musician-form/musician-form.component";

import { MusicianPageComponent } from "./musician-page/musician-page.component";
export { MusicianPageComponent } from "./musician-page/musician-page.component";
import { MusicianAddPageComponent } from "./musician-add-page/musician-add-page.component";
export { MusicianAddPageComponent } from "./musician-add-page/musician-add-page.component";
import { MusicianEditPageComponent } from "./musician-edit-page/musician-edit-page.component";
export { MusicianEditPageComponent } from "./musician-edit-page/musician-edit-page.component";
import { MusicianDeletePageComponent } from "./musician-delete-page/musician-delete-page.component";
export { MusicianDeletePageComponent } from "./musician-delete-page/musician-delete-page.component";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    MusicianPageComponent,
    MusicianAddPageComponent,
    MusicianEditPageComponent,
    MusicianDeletePageComponent,
    MusicianFormComponent,
  ],
  exports: [
    MusicianPageComponent,
    MusicianAddPageComponent,
    MusicianEditPageComponent,
    MusicianDeletePageComponent,
  ],
  providers: [MusiciansService, FormBuilder],
})
export class MusicianModule {}
