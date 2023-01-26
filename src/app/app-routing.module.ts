import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { UtilisateurComponent } from './Component/utilisateur/utilisateur.component';
import { PaymentComponent } from './component/payment/payment.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'logout', component : LogoutComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'utilisateur', component : UtilisateurComponent },
  {path: 'payment', component : PaymentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
