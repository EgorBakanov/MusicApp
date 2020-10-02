import { Component, Input } from "@angular/core";

@Component({
    selector:"info-row",
    templateUrl:"./info-row.component.html"
}) export class InfoRowComponent{
    @Input() label: string;
    @Input() data: any;
}