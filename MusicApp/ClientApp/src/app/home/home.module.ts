import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { CoreModule, MusiciansService } from "../core/core.module";

import { LibraryTreeComponent } from "./library-tree/library-tree.component";
import { TrackListComponent } from "./track-list/track-list.component";
import { HomeComponent } from "./home/home.component";
export { HomeComponent } from "./home/home.component";

@NgModule({
  imports: [CommonModule, CoreModule],
  declarations: [HomeComponent, LibraryTreeComponent, TrackListComponent],
  exports: [HomeComponent],
  providers: [MusiciansService],
})
export class HomeModule {}
