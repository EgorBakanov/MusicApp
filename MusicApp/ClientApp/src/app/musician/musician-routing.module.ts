import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MusicianAddPageComponent } from "./musician-add-page/musician-add-page.component";
import { MusicianEditPageComponent } from "./musician-edit-page/musician-edit-page.component";
import { MusicianDeletePageComponent } from "./musician-delete-page/musician-delete-page.component";

const routes: Routes = [
  {path: 'add', component:MusicianAddPageComponent },
  {path: ':id/edit', component:MusicianEditPageComponent },
  {path: ':id/delete', component:MusicianDeletePageComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MusicianRoutingModule { }