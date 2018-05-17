import { Component, OnInit } from '@angular/core';
import { Status } from '../enums/status.enum';
import { NgForm } from '@angular/forms';
import { AppareilService } from '../services/appareil.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-appareil',
  templateUrl: './edit-appareil.component.html',
  styleUrls: ['./edit-appareil.component.scss']
})
export class EditAppareilComponent implements OnInit {

  statusList: Array<Status> = Object.values(Status);
  defaultOnOff: Status = Status.Eteint;
  constructor(private appareilService: AppareilService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const name: string = form.value['name'];
    const status: Status = form.value['status'];
    this.router.navigate(['appareils']);
  }
}
