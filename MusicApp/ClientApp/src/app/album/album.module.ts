import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { FormsModule, FormBuilder, ReactiveFormsModule } from "@angular/forms";

import { CoreModule, AlbumsService } from "../core/core.module";
import { SharedModule } from "../shared/shared.module";

import { AlbumFormComponent } from "./album-form/album-form.component";

import { AlbumAddPageComponent } from "./album-add-page/album-add-page.component";
export { AlbumAddPageComponent } from "./album-add-page/album-add-page.component";
import { AlbumEditPageComponent } from "./album-edit-page/album-edit-page.component";
export { AlbumEditPageComponent } from "./album-edit-page/album-edit-page.component";
import { AlbumDeletePageComponent } from "./album-delete-page/album-delete-page.component";
export { AlbumDeletePageComponent } from "./album-delete-page/album-delete-page.component";

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
    AlbumAddPageComponent,
    AlbumEditPageComponent,
    AlbumDeletePageComponent,
    AlbumFormComponent,
  ],
  exports: [
    AlbumAddPageComponent,
    AlbumEditPageComponent,
    AlbumDeletePageComponent,
  ],
  providers: [AlbumsService, FormBuilder],
})
export class AlbumModule {}
