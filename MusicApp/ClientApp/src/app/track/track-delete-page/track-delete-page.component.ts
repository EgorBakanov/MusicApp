import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TrackForm, TracksService } from "../../core/core.module";

@Component({
  selector: "track-delete-page",
  templateUrl: "./track-delete-page.component.html",
})
export class TrackDeletePageComponent {
  track: TrackForm;

  paramsSub: Subscription;

  constructor(
    private ts: TracksService,
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
    this.ts.get(id).subscribe(
      (t) => {
        this.track = t;
      },
      (error) => {
        console.error(error);
        this.router.navigate(["404"]);
      }
    );
  }

  submit() {
    this.ts.delete(this.track.id).subscribe(
      (tf) => {
        console.log(tf);
        this.router.navigate(["home"]);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}