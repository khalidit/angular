import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppareilComponent } from './appareil/appareil.component';
import { AppareilService } from './services/appareil.service';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './authentication/authentication.component';
import { MenuComponent } from './menu/menu.component';
import { AuthenticationService } from './services/authentication.service';
import { AppareilDetailComponent } from './appareil-detail/appareil-detail.component';
import { PageNotFoundComponent } from './static/page-not-found/page-not-found.component';
import { AuthentificationGuardService } from './services/authentification-guard.service';
import { EditAppareilComponent } from './edit-appareil/edit-appareil.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserService } from './services/user.service';
import { NewUserComponent } from './new-user/new-user.component';


const appRoutes: Routes = [
  { path: 'appareils', canActivate: [AuthentificationGuardService], component: AppareilViewComponent },
  { path: 'appareils/:id', canActivate: [AuthentificationGuardService], component : AppareilDetailComponent},
  { path: 'authentication', component: AuthenticationComponent },
  { path: 'users', canActivate: [AuthentificationGuardService], component: UserListComponent },
  { path: 'add-user', canActivate: [AuthentificationGuardService], component: NewUserComponent },
  { path: 'add-appareil', canActivate: [AuthentificationGuardService], component: EditAppareilComponent },
  { path: '', canActivate: [AuthentificationGuardService], component: AppareilViewComponent },
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    AppareilComponent,
    AppareilViewComponent,
    AuthenticationComponent,
    MenuComponent,
    AppareilDetailComponent,
    PageNotFoundComponent,
    EditAppareilComponent,
    UserListComponent,
    NewUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppareilService,
    UserService,
    AuthenticationService,
    AuthentificationGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
