import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Router } from "@angular/router";

import { Track } from "src/app/core/core.module";

@Component({
  selector: "track-list",
  templateUrl: "./track-list.component.html",
})
export class TrackListComponent implements OnChanges {
  @Input() tracks: Track[];
  @Output() onSelectionChanged = new EventEmitter<Track>();

  currentTrack: Track;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    var newTracks = changes["tracks"].currentValue;
    if (newTracks != null) {
      this.currentTrack = newTracks[0];
      this.onSelectionChanged.emit(this.currentTrack);
    }
  }

  editTrack(id: number) {
    this.router.navigate(["/track", id, "edit"]);
  }

  deleteTrack(id: number) {
    this.router.navigate(["/track", id, "delete"]);
  }

  select(track: Track) {
    this.currentTrack = track;
    this.onSelectionChanged.emit(this.currentTrack);
  }
}
