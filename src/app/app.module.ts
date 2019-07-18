import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { AmplifyAngularModule, AmplifyService } from "aws-amplify-angular";

@NgModule({
  declarations: [AppComponent],
  imports: [AmplifyAngularModule, BrowserModule],
  providers: [AmplifyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
