import { Component, Input } from "@angular/core";
import { Musician } from "src/app/core/core.module";

@Component({
  selector: "library-tree",
  templateUrl: "./library-tree.component.html",
})
export class LibraryTreeComponent {

    @Input() library: Musician[];

    addMusician(){
      console.log("addMusician");
    }

    editMusician(id: number) {
      console.log("editMusician " + id);
    }
  
    deleteMusician(id: number) {
      console.log("deleteMusician " + id);
    }

    addAlbum(musician: number){
      console.log("addAlbum " + musician);
    }

    editAlbum(id: number) {
      console.log("editAlbum " + id);
    }
  
    deleteAlbum(id: number) {
      console.log("deleteAlbum " + id);
    }

    addTrack(album: number){
      console.log("addTrack " + album);
    }

    selectMusician(musician: number){
      console.log("selectMusician " + musician);
    }

    selectAlbum(album: number){
      console.log("selectAlbum " + album);
    }
}