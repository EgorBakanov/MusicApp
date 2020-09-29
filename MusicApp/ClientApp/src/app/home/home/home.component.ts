import { Component } from "@angular/core";
import { Musician, MusiciansService } from "../../core/core.module";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {

  library: Musician[];

  constructor(private ms: MusiciansService) {
    ms.getAll().subscribe((l) => {
      this.library = l;
    });
  }
}
