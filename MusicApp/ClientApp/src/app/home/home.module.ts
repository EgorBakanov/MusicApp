import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import {
  CoreModule,
  MusiciansService,
  TracksService,
} from "../core/core.module";
import { SharedModule } from "../shared/shared.module";

import { LibraryTreeComponent } from "./library-tree/library-tree.component";
import { LibraryTreeItemComponent } from "./library-tree-item/library-tree-item.component";
import { TrackListComponent } from "./track-list/track-list.component";
import { TrackUserActionComponent } from "./track-user-action/track-user-action.component";

import { HomePageComponent } from "./home-page/home-page.component";
export { HomePageComponent } from "./home-page/home-page.component";

@NgModule({
  imports: [CommonModule, CoreModule, SharedModule, RouterModule],
  declarations: [
    HomePageComponent,
    LibraryTreeComponent,
    LibraryTreeItemComponent,
    TrackListComponent,
    TrackUserActionComponent,
  ],
  exports: [HomePageComponent],
  providers: [MusiciansService, TracksService],
})
export class HomeModule {}
