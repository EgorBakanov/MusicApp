import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { AlbumForm, AlbumsService } from "../../core/core.module";

@Component({
  selector: "album-add-page",
  templateUrl: "./album-add-page.component.html",
})
export class AlbumAddPageComponent implements OnDestroy {
  album: AlbumForm;
  formIsValid: boolean;

  paramsSub: Subscription;

  constructor(
    private as: AlbumsService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.album = new AlbumForm(0, 0, "", 2010);
    this.paramsSub = route.queryParams.subscribe(
      (param) => {
        this.album.musicianId = +param["musician"];
        console.log(this.album);
      },
      (error) => {
        console.error(error);
        router.navigate(["404"]);
      }
    );
  }

  ngOnDestroy(): void {
    this.paramsSub.unsubscribe();
  }

  submit() {
    console.log(this.album);
    this.as.create(this.album).subscribe(
      (af) => {
        console.log(af);
        this.router.navigate(["home"]);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
