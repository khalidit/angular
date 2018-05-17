import { Injectable } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { Status } from '../enums/status.enum';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
/**
 * Service de gestion des appareils
 */
export class AppareilService {
  readonly serverUrl: String = 'https://http-client-api.firebaseio.com/';
  /**
   * Subject à exposer
   */
  appareilsSubject: Subject<Array<Appareil>> = new Subject();
  private appareils: Array<Appareil> = [];
  message: String;
  constructor(private httpClient: HttpClient) {
    this.getFromServer();
  }

  emitAppareilSubject() {
    // Forcer le subject à emmettre ce qu'on lui transmet en argument, ici, une copie du tableau appareils
    this.appareilsSubject.next(this.appareils.slice());
  }

  /**
   * Allumer tous les appareils
   */
  switchOnAll() {
    this.appareils.forEach(appareil => {
      appareil.status = Status.Allume;
    });
    // Notifier les composants souscrit aux subject posé sur appareils du changement de l'état de ce dernier
    this.emitAppareilSubject();
  }

  /**
   * Eteindre tous les appareils
   */
  switchOffAll(): void {
    this.appareils.forEach(appareil => {
      appareil.status = Status.Eteint;
    });
    // Notifier les composants souscrit au subject posé sur appareils du changement de l'état de ce dernier
    this.emitAppareilSubject();
  }

  /**
   * Retourne le statut de tous les appareils
   */
  getGlobalStatus(): boolean {
    for (const appareil of this.appareils) {
      if (appareil.status === Status.Eteint) {
        return false;
      }
    }
    return true;
  }

  /**
   * Allumer l'appareil ayant l'index en paramètre
   * @param index
   */
  switchOnOne(index: number): void {
    this.appareils[index].status = Status.Allume;
    // Notifier les composants souscrit aux subject posé sur appareils du changement de l'état de ce dernier
    this.emitAppareilSubject();
  }

  /**
   * Eteindre l'appareil ayant l'index en paramètre
   * @param index
   */
  switchOffOne(index: number): void {
    this.appareils[index].status = Status.Eteint;
    // Notifier les composants souscrit aux subject posé sur appareils du changement de l'état de ce dernier
    this.emitAppareilSubject();
  }

  /**
   * Retourne un appareil grâce à son index
   * @param id
   */
  getAppareilById(id: number): Appareil {
    let app: Appareil = null;
    this.appareils.forEach(
      (appareil, index) => {
        if (index === id - 1) {
          app = appareil;
        }
      }
    );
    return app;
  }

  /**
   * Add new appareil and return true if ok, false in otherwise
   * @param name
   * @param status
   */
  addAppreil(name: string, status: Status): Boolean {
    const initialLength: Number = this.appareils.length;
    const newLength: Number = this.appareils.push(new Appareil(name, status));
    this.emitAppareilSubject();
    return newLength > initialLength;
  }

  saveOnServer(): String {
    this.httpClient.put(this.serverUrl + 'appareils.json', this.appareils).subscribe(
      () => {
        return 'Enregistré avec succès !';
      },
      (error) => {
        return 'Erreur d\'enregistrement : ' + error;
      }
    );
    return null;
  }

  getFromServer() {
    this.httpClient.get<any[]>(this.serverUrl + 'appareils.json').subscribe(
      (response) => {
        this.appareils = response;
        this.emitAppareilSubject();
      },
      (error) => {
        console.log('Une erreur s\'est produite lors de la récupération des appareils : (' + error + ')');
      }
    );
  }
}
