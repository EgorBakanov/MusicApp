import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home.module";
import { NotFoundPageComponent } from "./shared/shared.module";

import {
  MusicianAddPageComponent,
  MusicianEditPageComponent,
  MusicianDeletePageComponent,
} from "./musician/musician.module";

import {
  AlbumAddPageComponent,
  AlbumEditPageComponent,
  AlbumDeletePageComponent,
} from "./album/album.module";

import {
  TrackAddPageComponent,
  TrackEditPageComponent,
  TrackDeletePageComponent,
} from "./track/track.module";

const appRoutes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "404", component: NotFoundPageComponent },
  { path: "musician/add", component: MusicianAddPageComponent },
  { path: "album/add", component: AlbumAddPageComponent },
  { path: "track/add", component: TrackAddPageComponent },
  { path: "musician/:id/edit", component: MusicianEditPageComponent },
  { path: "musician/:id/delete", component: MusicianDeletePageComponent },
  { path: "album/:id/edit", component: AlbumEditPageComponent },
  { path: "album/:id/delete", component: AlbumDeletePageComponent },
  { path: "track/:id/edit", component: TrackEditPageComponent },
  { path: "track/:id/delete", component: TrackDeletePageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
