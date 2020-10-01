import { Component, Input } from "@angular/core";
import { Router } from "@angular/router";

import { Track } from "src/app/core/core.module";

@Component({
  selector: "track-list",
  templateUrl: "./track-list.component.html",
})
export class TrackListComponent {
  @Input() tracks: Track[];

  constructor(private router: Router) {}

  editTrack(id: number) {
    this.router.navigate(["/track", id, "edit"]);
  }

  deleteTrack(id: number) {
    this.router.navigate(["/track", id, "delete"]);
  }
}
