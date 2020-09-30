import { Component, EventEmitter, Input, Output } from "@angular/core";
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

  addMusician() {
    console.log("addMusician");
  }

  editMusician(id: number) {
    console.log("editMusician " + id);
  }

  deleteMusician(id: number) {
    console.log("deleteMusician " + id);
  }

  addAlbum(musician: number) {
    console.log("addAlbum " + musician);
  }

  editAlbum(id: number) {
    console.log("editAlbum " + id);
  }

  deleteAlbum(id: number) {
    console.log("deleteAlbum " + id);
  }

  addTrack(album: number) {
    console.log("addTrack " + album);
  }

  selectMusician(musician: number) {
    console.log("selectMusician " + musician);

    if (this.currentMusician == musician) {
      this.currentAlbum = null;
      this.currentMusician = null;
    } else {
      this.currentMusician = musician;
    }
    this.notifySelectionChanged();
  }

  selectAlbum(album: number) {
    console.log("selectAlbum " + album);

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
