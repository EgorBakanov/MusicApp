import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomePageComponent } from "./home/home.module";
import { NotFoundPageComponent } from "./shared/shared.module";

import {
  MusicianPageComponent,
  MusicianAddPageComponent,
  MusicianEditPageComponent,
  MusicianDeletePageComponent,
} from "./musician/musician.module";

import {
  AlbumPageComponent,
  AlbumAddPageComponent,
  AlbumEditPageComponent,
  AlbumDeletePageComponent,
} from "./album/album.module";

import {
  TrackPageComponent,
  TrackAddPageComponent,
  TrackEditPageComponent,
  TrackDeletePageComponent,
} from "./track/track.module";

const musicianRoutes: Routes = [
  { path: "edit", component: MusicianEditPageComponent },
  { path: "delete", component: MusicianDeletePageComponent },
  { path: "**", redirectTo: "/404" },
];
const albumRoutes: Routes = [
  { path: "edit", component: AlbumEditPageComponent },
  { path: "delete", component: AlbumDeletePageComponent },
  { path: "**", redirectTo: "/404" },
];
const trackRoutes: Routes = [
  { path: "edit", component: TrackEditPageComponent },
  { path: "delete", component: TrackDeletePageComponent },
  { path: "**", redirectTo: "/404" },
];

const appRoutes: Routes = [
  { path: "home", component: HomePageComponent },
  { path: "404", component: NotFoundPageComponent },
  { path: "musician/add", component: MusicianAddPageComponent },
  { path: "album/add", component: AlbumAddPageComponent },
  { path: "track/add", component: TrackAddPageComponent },
  {
    path: "musician/:id",
    component: MusicianPageComponent,
    children: musicianRoutes,
  },
  { path: "album/:id", component: AlbumPageComponent, children: albumRoutes },
  { path: "track/:id", component: TrackPageComponent, children: trackRoutes },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
