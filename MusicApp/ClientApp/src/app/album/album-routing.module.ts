import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AlbumAddPageComponent } from "./album-add-page/album-add-page.component";
import { AlbumEditPageComponent } from "./album-edit-page/album-edit-page.component";
import { AlbumDeletePageComponent } from "./album-delete-page/album-delete-page.component";

const routes: Routes = [
  { path: "add", component: AlbumAddPageComponent },
  { path: ":id/edit", component: AlbumEditPageComponent },
  { path: ":id/delete", component: AlbumDeletePageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlbumRoutingModule {}
