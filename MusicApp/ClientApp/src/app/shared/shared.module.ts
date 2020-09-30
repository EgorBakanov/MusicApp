import { NgModule } from "@angular/core";

import { HeaderComponent } from "./header/header.component";
import { AddButtonComponent } from "./add-button/add-button.component";
import { EditDeleteButtonComponent } from "./edit-delete-button/edit-delete-button.component";
import { AddEditDeleteButtonComponent } from "./add-edit-delete-button/add-edit-delete-button.component";
import { ClickStopPropagation } from "./click-stop-propagation/click-stop-propagation.directive";

@NgModule({
  imports: [],
  declarations: [
    HeaderComponent,
    AddButtonComponent,
    EditDeleteButtonComponent,
    AddEditDeleteButtonComponent,
    ClickStopPropagation,
  ],
  exports: [
    HeaderComponent,
    AddButtonComponent,
    EditDeleteButtonComponent,
    AddEditDeleteButtonComponent,
    ClickStopPropagation,
  ],
})
export class SharedModule {}
