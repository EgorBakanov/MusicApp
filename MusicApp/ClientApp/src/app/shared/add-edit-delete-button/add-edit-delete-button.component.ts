import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "add-edit-delete-button",
  templateUrl: "./add-edit-delete-button.component.html",
})
export class AddEditDeleteButtonComponent {
  @Output() onAddClick = new EventEmitter();
  @Output() onEditClick = new EventEmitter();
  @Output() onDeleteClick = new EventEmitter();

  clickAdd() {
    this.onAddClick.emit();
  }

  clickEdit() {
    this.onEditClick.emit();
  }

  clickDelete() {
    this.onDeleteClick.emit();
  }
}
