import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavSidebarComponent } from './Component/nav-sidebar/nav-sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './Component/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SidebarComponent } from './Component/sidebar/sidebar.component';
import { CourseComponent } from './Component/course/course.component';
import { LoginComponent } from './Component/login/login.component';
import { LogoutComponent } from './Component/logout/logout.component';
import { UtilisateurComponent } from './Component/utilisateur/utilisateur.component';
import { HttpClientModule } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFireModule } from '@angular/fire/compat';
import { PaymentComponent } from 'src/app/Component/payment/payment.component';
import { AddUtilisateurComponent } from 'src/app/Component/utilisateur/add-utilisateur/add-utilisateur.component';
import { EditUtilisateurComponent } from 'src/app/Component/utilisateur/edit-utilisateur/edit-utilisateur.component'

@NgModule({
  declarations: [
    AppComponent,
    NavSidebarComponent,
    DashboardComponent,
    SidebarComponent,
    CourseComponent,
    LoginComponent,
    LogoutComponent,
    UtilisateurComponent,
    PaymentComponent,
    AddUtilisateurComponent,
    EditUtilisateurComponent,
   
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
