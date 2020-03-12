import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SelectLayoutComponent } from './pages/select-layout/select-layout.component';
import { EditLayoutComponent } from './pages/edit-layout/edit-layout.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'select-layout', component: SelectLayoutComponent },
  { path: 'edit-layout/:id', component: EditLayoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
