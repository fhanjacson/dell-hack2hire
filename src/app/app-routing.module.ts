import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { SidePanelComponent } from "./testPanel/side-panel/side-panel.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "admin", component: AdminComponent },
  { path: "sideNav", component: SidePanelComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
