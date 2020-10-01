import { Component } from "@angular/core";

import { MusicianForm } from "src/app/core/core.module";

@Component({
  selector: "musician-page",
  templateUrl: "./musician-page.component.html",
})
export class MusicianPageComponent {
  musician: MusicianForm = new MusicianForm(1,"",0,"",2010);

  change(status: any){
    console.log(this.musician);
    console.log(status);
  }
}