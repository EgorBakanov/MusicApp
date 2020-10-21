import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";

import { CoreModule, MusiciansService } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { MusicianRoutingModule } from "./musician-routing.module";

import { MusicianFormComponent } from "./musician-form/musician-form.component";
import { MusicianAddPageComponent } from "./musician-add-page/musician-add-page.component";
import { MusicianEditPageComponent } from "./musician-edit-page/musician-edit-page.component";
import { MusicianDeletePageComponent } from "./musician-delete-page/musician-delete-page.component";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MusicianRoutingModule,
  ],
  declarations: [
    MusicianAddPageComponent,
    MusicianEditPageComponent,
    MusicianDeletePageComponent,
    MusicianFormComponent,
  ],
  providers: [MusiciansService, FormBuilder],
})
export class MusicianModule {}
