import { Component, EventEmitter, Input, Output } from "@angular/core";

@Component({
  selector: "library-tree-item",
  templateUrl: "./library-tree-item.component.html",
})
export class LibraryTreeItemComponent {
  @Input() text: string;
  @Input() isSelected: boolean = false;
  @Input() level: number;

  @Output() onSelect = new EventEmitter();
  @Output() onEdit = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  @Output() onAdd = new EventEmitter();

  select() {
    this.onSelect.emit();
  }

  edit() {
    this.onEdit.emit();
  }

  delete() {
    this.onDelete.emit();
  }

  add() {
    this.onAdd.emit();
  }
}
