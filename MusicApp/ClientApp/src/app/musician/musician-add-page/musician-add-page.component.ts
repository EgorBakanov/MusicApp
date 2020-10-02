import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { MusicianForm, MusiciansService } from "../../core/core.module";

@Component({
  selector: "musician-add-page",
  templateUrl: "./musician-add-page.component.html",
})
export class MusicianAddPageComponent {
  musician: MusicianForm;
  formIsValid: boolean;

  constructor(private ms: MusiciansService, private router: Router) {
    this.musician = new MusicianForm(0, "", 0, "", 2010);
  }

  submit() {
    this.ms.create(this.musician).subscribe(
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
