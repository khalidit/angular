import { Component, OnInit } from '@angular/core';
import { Appareil } from '../models/appareil.model';
import { AppareilService } from '../services/appareil.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from '../enums/status.enum';

@Component({
  selector: 'app-appareil-detail',
  templateUrl: './appareil-detail.component.html',
  styleUrls: []
})
export class AppareilDetailComponent implements OnInit {

  appareil: Appareil;
  id: number;

  constructor(private appareilService: AppareilService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.id = +this.route.snapshot.params['id'];
    if (isNaN(this.id)) {
      this.router.navigate(['not-found']);
    }
    this.appareil = this.appareilService.getAppareilById(this.id);
  }
}
