import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "add-button",
    templateUrl:"./add-button.component.html"
})
export class AddButtonComponent{
    @Output() onAddClick = new EventEmitter();

    click(){
        this.onAddClick.emit();
    }
}