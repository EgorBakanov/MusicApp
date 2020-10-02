import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import { TrackForm, TracksService } from "../../core/core.module";

@Component({
  selector: "track-add-page",
  templateUrl: "./track-add-page.component.html",
})
export class TrackAddPageComponent implements OnDestroy {
  track: TrackForm;
  formIsValid: boolean;

  paramsSub: Subscription;

  constructor(
    private ts: TracksService,
    private router: Router,
    route: ActivatedRoute
  ) {
    this.track = new TrackForm(0, 0, "", "00:00", false, false, 0);
    this.paramsSub = route.queryParams.subscribe(
      (param) => {
        this.track.albumId = +param["album"];
        console.log(this.track);
      },
      (error) => {
        console.error(error);
        router.navigate(["404"]);
      }
    );
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }

  submit() {
    console.log(this.track);
    this.ts.create(this.track).subscribe(
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
