import { Component, OnInit } from '@angular/core';

import { Idol } from '../idol';
import { IdolService } from '../idol.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  idols: Idol[];

  constructor(private idolService: IdolService) { }

  ngOnInit() {
    this.getIdols();
  }

  getIdols(): void {
    this.idols = this.idolService.getIdols();
  }
}
