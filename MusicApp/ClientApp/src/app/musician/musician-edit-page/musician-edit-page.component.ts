import { Component, OnDestroy } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";

import { MusicianForm, MusiciansService } from "../../core/core.module";

@Component({
  selector: "musician-edit-page",
  templateUrl: "./musician-edit-page.component.html",
})
export class MusicianEditPageComponent implements OnDestroy {
  musician: MusicianForm;
  formIsValid: boolean;

  paramsSub: Subscription;

  constructor(
    private ms: MusiciansService,
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
    this.ms.get(id).subscribe(
      (m) => {
        this.musician = m;
      },
      (error) => {
        console.error(error);
        this.router.navigate(["404"]);
      }
    );
  }

  submit() {
    this.ms.update(this.musician).subscribe(
      (mf) => {
        console.log(mf);
        this.router.navigate(["home"]);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
