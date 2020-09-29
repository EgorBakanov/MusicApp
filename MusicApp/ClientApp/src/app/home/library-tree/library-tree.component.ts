import { Component, Input } from "@angular/core";
import { Musician } from "src/app/core/core.module";

@Component({
  selector: "library-tree",
  templateUrl: "./library-tree.component.html",
})
export class LibraryTreeComponent {

    @Input() library: Musician[];
}