import { Component, OnInit } from '@angular/core';

import { IdolService } from '../idol.service';
import { Idol } from '../idol';

@Component({
  selector: 'app-idols',
  templateUrl: './idols.component.html',
  styleUrls: ['./idols.component.css']
})
export class IdolsComponent implements OnInit {

  idols: Idol[];

  constructor(private idolService: IdolService) { }

  ngOnInit() {
    this.getIdols();
  }

  getIdols(): void {
    this.idolService.getIdols()
        .subscribe(idols => this.idols = idols);
  }

  onAdd(name: string, imageUrl: string): void {
    this.idolService.addIdol({ name, imageUrl } as Idol)
        .subscribe(idol => this.idols.push(idol));
    //
  }
}
