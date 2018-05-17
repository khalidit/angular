import { Injectable } from '@angular/core';


export class AuthenticationService {
  isAuthenticate: boolean;

  constructor() {
    this.isAuthenticate = false;
  }

  signIn() {
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () => {
            this.isAuthenticate = true;
            resolve(true);
          }, 2
        );
      }
    );
  }

  signOut(): void {
    this.isAuthenticate = false;
  }
}
