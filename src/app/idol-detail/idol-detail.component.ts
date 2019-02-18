import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { Idol } from '../idol';
import { IdolService } from '../idol.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-idol-detail',
  templateUrl: './idol-detail.component.html',
  styleUrls: ['./idol-detail.component.css']
})
export class IdolDetailComponent implements OnInit {

  idol: Idol;

  constructor(
    private router: ActivatedRoute,
    private idolService: IdolService,
    private location: Location,
  ) { }

  ngOnInit() {
    this.getIdol();
  }

  getIdol(): void {
    const id = +this.router.snapshot.paramMap.get('id');
    this.idol = this.idolService.getIdol(id);
  }

  onBack(): void {
    this.location.back();
  }

}
