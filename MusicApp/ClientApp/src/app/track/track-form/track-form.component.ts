import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { TrackForm } from "../../core/core.module";

@Component({
  selector: "track-form",
  templateUrl: "./track-form.component.html",
})
export class TrackFormComponent {
  @Input() track: TrackForm;
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
      duration: [
        "00:00",
        [
          Validators.required,
          Validators.pattern("^\d{1,2}\:\d{1,2}$"),
          Validators.minLength(3),
          Validators.maxLength(5),
        ],
      ],
    });
  }
}
