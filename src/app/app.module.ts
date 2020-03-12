import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatSidenavModule } from "@angular/material/sidenav";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SidePanelComponent } from "./testPanel/side-panel/side-panel.component";

@NgModule({
  declarations: [AppComponent, SidePanelComponent],
  imports: [BrowserModule, AppRoutingModule, MatSidenavModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
