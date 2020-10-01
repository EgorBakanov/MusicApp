import { Component, EventEmitter, Input, Output } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

import { MusicianForm } from "src/app/core/core.module";

@Component({
  selector: "musician-form",
  templateUrl: "./musician-form.component.html",
})
export class MusicianFormComponent {
  @Input() musician: MusicianForm;
  @Output() statusChanged = new EventEmitter<boolean>();

  form: FormGroup;

  constructor(builder: FormBuilder) {
    this.form = this.buildForm(builder);

    this.form.statusChanges.subscribe((value) => {
        this.statusChanged.emit(value==="VALID");
      });
  }

  buildForm(builder: FormBuilder) : FormGroup {
    return builder.group({
      name: ["", [Validators.required, Validators.maxLength(50)]],
      age: [0, [Validators.required, Validators.min(0), Validators.max(120)]],
      genre: ["", [Validators.maxLength(15)]],
      careerStartYear: [
        2010,
        [Validators.required, Validators.min(1900), Validators.max(2100)],
      ],
    });
  }
}
