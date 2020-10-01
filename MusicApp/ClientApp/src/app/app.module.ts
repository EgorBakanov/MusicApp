import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Router } from "@angular/router";

import { AppRoutingModule } from "./app-routing.module";
import { HomeModule } from "./home/home.module";
import { MusicianModule } from "./musician/musician.module";
import { AlbumModule } from "./album/album.module";
import { TrackModule } from "./track/track.module";
import { SharedModule } from "./shared/shared.module";

import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule,
    HomeModule,
    MusicianModule,
    AlbumModule,
    TrackModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
