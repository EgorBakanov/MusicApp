import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Router } from "@angular/router";
import { Musician } from "src/app/core/core.module";

@Component({
  selector: "library-tree",
  templateUrl: "./library-tree.component.html",
})
export class LibraryTreeComponent {
  @Input() library: Musician[];

  @Output() onSelectionChanged = new EventEmitter<{
    musician?: number;
    album?: number;
  }>();

  currentAlbum?: number;
  currentMusician?: number;

  constructor(private router: Router) {}

  addMusician() {
    this.router.navigate(["/musician", "add"]);
  }

  editMusician(id: number) {
    this.router.navigate(["/musician", id, "edit"]);
  }

  deleteMusician(id: number) {
    this.router.navigate(["/musician", id, "delete"]);
  }

  addAlbum(musician: number) {
    this.router.navigate(["/album", "add"], {
      queryParams: { musician: musician },
    });
  }

  editAlbum(id: number) {
    this.router.navigate(["/album", id, "edit"]);
  }

  deleteAlbum(id: number) {
    this.router.navigate(["/album", id, "delete"]);
  }

  addTrack(album: number) {
    this.router.navigate(["/track", "add"], {
      queryParams: { album: album },
    });
  }

  selectMusician(musician: number) {
    this.currentAlbum = null;
    if (this.currentMusician == musician) {
      this.currentMusician = null;
    } else {
      this.currentMusician = musician;
    }
    this.notifySelectionChanged();
  }

  selectAlbum(album: number) {
    if (this.currentAlbum == album) {
      this.currentAlbum = null;
    } else {
      this.currentAlbum = album;
    }
    this.notifySelectionChanged();
  }

  notifySelectionChanged() {
    var selection = {
      musician: this.currentMusician,
      album: this.currentAlbum,
    };

    this.onSelectionChanged.emit(selection);
  }
}
