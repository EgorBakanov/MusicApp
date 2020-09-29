import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule } from "@angular/router";

import { CoreModule } from "./core/core.module";
import { HomeModule, HomeComponent } from "./home/home.module";
import { SharedModule } from "./shared/shared.module";
import { AppComponent } from "./app.component";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "**", redirectTo: "/" },
];

@NgModule({
  imports: [
    CoreModule,
    BrowserModule,
    HomeModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
