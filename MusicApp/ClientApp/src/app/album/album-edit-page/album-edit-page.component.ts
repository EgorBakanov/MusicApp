import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { AlbumForm, AlbumsService } from "../../core/core.module";

@Component({
  selector: "album-edit-page",
  templateUrl: "./album-edit-page.component.html",
})
export class AlbumEditPageComponent implements OnDestroy {
  album: AlbumForm;
  formIsValid: boolean;

  paramsSub: Subscription;

  constructor(
    private as: AlbumsService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.paramsSub = route.params.subscribe((param) =>
      this.fetchData(param["id"])
    );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  fetchData(id: number) {
    this.as.get(id).subscribe(
      (a) => {
        this.album = a;
      },
      (error) => {
        console.error(error);
        this.router.navigate(["404"]);
      }
    );
  }

  submit() {
    this.as.update(this.album).subscribe(
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
