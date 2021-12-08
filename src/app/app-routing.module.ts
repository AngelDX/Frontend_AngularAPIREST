import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientAddComponent } from './component/client-add/client-add.component';
import { ClientListComponent } from './component/client-list/client-list.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { LoginComponent } from './component/login/login.component';

import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'clientes',component:ClientListComponent, canActivate : [AuthGuard] },
  { path: 'clientes/addclient',component:ClientAddComponent, canActivate : [AuthGuard]},
  { path: 'dashboard', component: DashboardComponent, canActivate : [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
