import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";

import { CoreModule, TracksService } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";
import { TrackRoutingModule } from "./track-routing.module";

import { TrackFormComponent } from "./track-form/track-form.component";
import { TrackAddPageComponent } from "./track-add-page/track-add-page.component";
import { TrackEditPageComponent } from "./track-edit-page/track-edit-page.component";
import { TrackDeletePageComponent } from "./track-delete-page/track-delete-page.component";

@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    SharedModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    TrackRoutingModule,
  ],
  declarations: [
    TrackAddPageComponent,
    TrackEditPageComponent,
    TrackDeletePageComponent,
    TrackFormComponent,
  ],
  providers: [TracksService, FormBuilder],
})
export class TrackModule {}
