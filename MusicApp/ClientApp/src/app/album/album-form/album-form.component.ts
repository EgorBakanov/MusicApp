import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { AlbumForm } from "../../core/core.module";

@Component({
  selector: "album-form",
  templateUrl: "./album-form.component.html",
})
export class AlbumFormComponent {
  @Input() album: AlbumForm;
  @Output() statusChanged = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = this.buildForm(builder);

    this.form.statusChanges.subscribe((value) => {
      this.statusChanged.emit(value === "VALID");
    });
  }

  buildForm(builder: FormBuilder): FormGroup {
    return builder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      releaseYear: [
        2010,
        [Validators.required, Validators.min(1900), Validators.max(2100)],
      ],
    });
  }
}
