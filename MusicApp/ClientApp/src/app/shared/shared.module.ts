import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { AddButtonComponent } from "./add-button/add-button.component";
import { EditDeleteButtonComponent } from "./edit-delete-button/edit-delete-button.component";
import { AddEditDeleteButtonComponent } from "./add-edit-delete-button/add-edit-delete-button.component";
import { ClickStopPropagation } from "./click-stop-propagation/click-stop-propagation.directive";

import { NotFoundPageComponent } from "./not-found-page/not-found-page.component";
export { NotFoundPageComponent } from "./not-found-page/not-found-page.component";

@NgModule({
  imports: [RouterModule],
  declarations: [
    HeaderComponent,
    AddButtonComponent,
    EditDeleteButtonComponent,
    AddEditDeleteButtonComponent,
    ClickStopPropagation,
    NotFoundPageComponent,
  ],
  exports: [
    HeaderComponent,
    AddButtonComponent,
    EditDeleteButtonComponent,
    AddEditDeleteButtonComponent,
    ClickStopPropagation,
    NotFoundPageComponent,
  ],
})
export class SharedModule {}
