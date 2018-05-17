import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from './authentication.service';

/**
 * Mise en place de la sécurité de l'application
 */
// Injectable permet d'injecter d'autre service à notre service, ici AuthenticationService par exemple a été injecté.
@Injectable({ providedIn: 'root'})
export class AuthentificationGuardService implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.authenticationService.isAuthenticate) {
      return true;
    }
    this.router.navigate(['authentication']);
  }
}
