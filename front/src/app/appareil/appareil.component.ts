import { Component, Input, OnInit } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { Status } from '../enums/status.enum';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: []
})
export class AppareilComponent implements OnInit {

  @Input()
  appareil: Appareil;

  @Input()
  id: number;

  constructor(private appareilService: AppareilService, private router: Router) { }

  ngOnInit() {
  }

  private getStatus() {
    return this.appareil.status;
  }

  isEteint() {
    return this.getStatus() === Status.Eteint;
  }

  isAllume() {
    return this.getStatus() === Status.Allume;
  }

  getColor() {
    return this.isEteint() ? 'red' : 'green';
  }

  onSwitchOn(): void {
    this.appareilService.switchOnOne(this.id);
  }

  onSwitchOff(): void {
    this.appareilService.switchOffOne(this.id);
  }
}
