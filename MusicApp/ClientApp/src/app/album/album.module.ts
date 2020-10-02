import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { CoreModule, AlbumsService } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";

import { AlbumAddPageComponent } from "./album-add-page/album-add-page.component";
export { AlbumAddPageComponent } from "./album-add-page/album-add-page.component";
import { AlbumEditPageComponent } from "./album-edit-page/album-edit-page.component";
export { AlbumEditPageComponent } from "./album-edit-page/album-edit-page.component";
import { AlbumDeletePageComponent } from "./album-delete-page/album-delete-page.component";
export { AlbumDeletePageComponent } from "./album-delete-page/album-delete-page.component";

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, RouterModule],
  declarations: [
    AlbumAddPageComponent,
    AlbumEditPageComponent,
    AlbumDeletePageComponent,
  ],
  exports: [
    AlbumAddPageComponent,
    AlbumEditPageComponent,
    AlbumDeletePageComponent,
  ],
  providers: [AlbumsService],
})
export class AlbumModule {}
