import { Component, OnInit, OnDestroy } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { AppareilService } from '../services/appareil.service';
import { Subscription } from 'rxjs';
import { map, filter, reduce } from 'rxjs/operators';
import { Status } from '../enums/status.enum';

@Component({
  selector: 'app-appareil-view',
  templateUrl: './appareil-view.component.html',
  styleUrls: []
})
export class AppareilViewComponent implements OnInit, OnDestroy {

  title: String = 'Appareil';
  isAuth: Boolean = false;
  message: String;

  appareils: Array<Appareil>;
  appareilsSubscription: Subscription;

  lastUpdate = new Promise(
    (resolve, reject) => {
      const date = new Date();
      setTimeout(() => {
        resolve(date);
      }, 200);
    }
  );

  constructor(private appareilService: AppareilService) {
    setTimeout(() => { this.isAuth = true; }, 2000);
  }

  ngOnInit(): void {
    this.appareilsSubscription = this.appareilService.appareilsSubject.subscribe(
      (appareils: Array<Appareil>) => {
        this.appareils = appareils;
      }
    );
    this.appareilService.emitAppareilSubject();
  }

  ngOnDestroy(): void {
    this.appareilsSubscription.unsubscribe();
  }

  onAllumer() {
    this.appareilService.switchOnAll();
  }

  onEteindre() {
    this.appareilService.switchOffAll();
  }

  getGlobalStatus() {
    return this.appareilService.getGlobalStatus();
  }

  onSave(): void {
    this.message = this.appareilService.saveOnServer();
  }
}
