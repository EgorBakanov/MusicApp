import { Component, OnInit } from "@angular/core";
import {
  Musician,
  MusiciansService,
  Track,
  TracksService,
} from "../../core/core.module";

@Component({
  selector: "home",
  templateUrl: "./home.component.html",
})
export class HomeComponent implements OnInit {
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
}
