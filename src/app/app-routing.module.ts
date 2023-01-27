import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { UtilisateurComponent } from './Component/utilisateur/utilisateur.component';
import { PaymentComponent } from 'src/app/Component/payment/payment.component';
import { EditUtilisateurComponent } from 'src/app/Component/utilisateur/edit-utilisateur/edit-utilisateur.component';


const routes: Routes = [
  {path: '', redirectTo:'login', pathMatch:'full'},
  {path: 'login', component : LoginComponent},
  {path: 'logout', component : LogoutComponent},
  {path: 'dashboard', component : DashboardComponent},
  {path: 'utilisateur', component : UtilisateurComponent },
  {path: 'payment', component : PaymentComponent},
  {path: 'editer/:id', component : EditUtilisateurComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
