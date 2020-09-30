import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "edit-delete-button",
  templateUrl: "./edit-delete-button.component.html",
})
export class EditDeleteButtonComponent {
  @Output() onEditClick = new EventEmitter();
  @Output() onDeleteClick = new EventEmitter();

  clickEdit() {
    this.onEditClick.emit();
  }

  clickDelete() {
    this.onDeleteClick.emit();
  }
}
