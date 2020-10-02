import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { MusicianForm, MusiciansService } from "../../core/core.module";

@Component({
  selector: "musician-delete-page",
  templateUrl: "./musician-delete-page.component.html",
})
export class MusicianDeletePageComponent {
  musician: MusicianForm;

  constructor(
    private ms: MusiciansService,
    private router: Router,
    route: ActivatedRoute
  ) {
    route.params.subscribe((param) => this.fetchData(param["id"]));
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
    this.ms.delete(this.musician.id).subscribe(
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
