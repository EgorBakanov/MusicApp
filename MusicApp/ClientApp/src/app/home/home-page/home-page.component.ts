import { Component, OnInit } from "@angular/core";
import {
  Musician,
  MusiciansService,
  Track,
  TracksService,
} from "../../core/core.module";

@Component({
  selector: "home-page",
  templateUrl: "./home-page.component.html",
})
export class HomePageComponent implements OnInit {
  library: Musician[];
  tracks: Track[];

  constructor(private ms: MusiciansService, private ts: TracksService) {}

  ngOnInit(): void {
    this.loadLibrary();
    this.loadTracks();
  }

  loadLibrary() {
    this.ms.getAll().subscribe((l) => {
      this.library = l;
    });
  }

  loadTracks(musician?: number, album?: number) {
    this.ts.getAll(musician, album).subscribe((t) => {
      this.tracks = t;
    });
  }

  onSelectionChanged(selection: { musician?: number; album?: number }) {
    this.loadTracks(selection.musician, selection.album);
  }
}
