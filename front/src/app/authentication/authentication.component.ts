import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: []
})
export class AuthenticationComponent implements OnInit {

  authenticationStatus: boolean;
  authenticationMessage: string;

  /**
   * Injection du service d'authentification
   * @param authenticationService
   */
  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.updateAuthenticationStatus();
  }

  onSignIn() {
    this.authenticationService.signIn().then(
      () => {
        this.authenticationMessage = 'Authentification réussie ! ';
        this.updateAuthenticationStatus();
        setTimeout(
          () => {
            this.router.navigate(['add-appareil']);
          }, 0
        );
      }
    );
  }

  onSignOut() {
    this.authenticationService.signOut();
    this.authenticationMessage = 'Vous êtes déconnecté maintenant ! ';
    this.updateAuthenticationStatus();
  }

  updateAuthenticationStatus() {
    this.authenticationStatus = this.authenticationService.isAuthenticate;
  }

}
