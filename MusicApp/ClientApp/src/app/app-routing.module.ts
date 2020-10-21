import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundPageComponent } from "./shared/shared.module";

const appRoutes: Routes = [
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then((m) => m.HomeModule),
  },
  {
    path: "musician",
    loadChildren: () =>
      import("./musician/musician.module").then((m) => m.MusicianModule),
  },
  {
    path: "album",
    loadChildren: () =>
      import("./album/album.module").then((m) => m.AlbumModule),
  },
  {
    path: "track",
    loadChildren: () =>
      import("./track/track.module").then((m) => m.TrackModule),
  },
  { path: "404", component: NotFoundPageComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/404" },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
