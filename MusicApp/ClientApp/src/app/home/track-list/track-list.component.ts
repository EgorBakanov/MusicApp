import { Component, Input } from "@angular/core";

import { Track } from "src/app/core/core.module";

@Component({
  selector: "track-list",
  templateUrl: "./track-list.component.html",
})
export class TrackListComponent {
  @Input() tracks: Track[];

  editTrack(id: number) {
    console.log("editTrack " + id);
  }

  deleteTrack(id: number) {
    console.log("deleteTrack " + id);
  }
}
