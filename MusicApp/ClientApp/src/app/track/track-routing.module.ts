import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TrackAddPageComponent } from "./track-add-page/track-add-page.component";
import { TrackEditPageComponent } from "./track-edit-page/track-edit-page.component";
import { TrackDeletePageComponent } from "./track-delete-page/track-delete-page.component";

const routes: Routes = [
    { path: "add", component: TrackAddPageComponent },
    { path: ":id/edit", component: TrackEditPageComponent },
    { path: ":id/delete", component: TrackDeletePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrackRoutingModule { }